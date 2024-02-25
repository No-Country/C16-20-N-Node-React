import Usuario from "../models/usuario.js";
import Conexion from "./conexion.js";
import { buscarRestaurantePorMail } from "./restauranteController.js";
import { buscarClientePorMail } from "./clienteController.js";
import { buscarRepartidorPorMail } from "./repartidorController.js";
import bcrypt from "bcrypt";
import Cliente from "../models/cliente.js";
import Repartidor from "../models/repartidor.js";
import Restaurante from "../models/restaurante.js";

async function hashearPass(pass) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
}
export async function compararPass(passActual, passHash) {
  return await bcrypt.compare(passActual, passHash);
}

const crearUsuario = async (usuario) => {
  try {
    usuario.password = await hashearPass(usuario.password);
    const usuarioNuevo = await Usuario.create({
      mail: usuario.mail,
      password: usuario.password,
      rol_usuario: usuario.rol_usuario,
    });
    console.log(usuario.rol_usuario);
    if (usuario.rol_usuario === "cliente") {
      const clienteNuevo = await Cliente.create({
        nombre_cliente: usuario.nombre_cliente,
        direccion_cliente: usuario.direccion_cliente,
        telefono_cliente: usuario.telefono_cliente,
        id_usuario: usuarioNuevo.id,
      });
      return clienteNuevo;
    } else if (usuario.rol_usuario === "repartidor") {
      const nuevoRepartidor = await Repartidor.create({
        nombre_repartidor: usuario.nombre_repartidor,
        direccion_repartidor: usuario.direccion_repartidor,
        telefono_repartidor: usuario.telefono_repartidor,
        id_usuario: usuarioNuevo.id,
      });
      return nuevoRepartidor;
    } else if (usuario.rol_usuario === "restaurante") {
      const nuevoRestaurant = await Restaurante.create({
        nombre_restaurant: usuario.nombre_restaurant,
        direccion_restaurant: usuario.direccion_restaurant,
        telefono_restaurant: usuario.telefono_restaurant,
        rubro_restaurant: usuario.rubro_restaurant,
        id_usuario: usuarioNuevo.id,
      });
      return nuevoRestaurant;
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error("El correo electrónico ya está en uso");
    } else {
      throw error;
    }
  }
};

const buscarUsuarioPorMail = async (usuario) => {
  try {
    let usuarioEncontrado = await buscarRestaurantePorMail(usuario);

    if (!usuarioEncontrado || usuarioEncontrado.length === 0) {
      usuarioEncontrado = await buscarClientePorMail(usuario);

      if (!usuarioEncontrado || usuarioEncontrado.length === 0) {
        usuarioEncontrado = await buscarRepartidorPorMail(usuario);
      }
    }
    return usuarioEncontrado;
  } catch (error) {
    throw new Error(
      "Error al buscar usuario por correo electrónico: " + error.message
    );
  }
};

const buscarUsuario = async (usuario) => {
  try {
    const usuarioBuscado = await Usuario.findOne({
      where: {
        mail: usuario.mail,
      },
    });
    return usuarioBuscado;
  } catch {
    throw new Error("Error al buscar usuario");
  }
};

export { crearUsuario, buscarUsuarioPorMail, buscarUsuario };
