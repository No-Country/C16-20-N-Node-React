import Usuario from "../models/usuario.js";
import Conexion from "./conexion.js";
import { buscarRestaurantePorMail } from "./restauranteController.js";
import { buscarClientePorMail } from "./clienteController.js";
import { buscarRepartidorPorMail } from "./repartidorController.js";

const crearUsuario = async (usuario) => {
  try {
    const usuarioExistente = await buscarUsuarioPorMail(usuario);
    if (usuarioExistente) {
      return usuarioExistente;
    } else {
      const nuevoUsuario = await Usuario.create(usuario);
      return nuevoUsuario;
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
