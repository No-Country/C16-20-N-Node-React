import Usuario from "../models/usuario.js";
import Conexion from "./conexion.js";
import { buscarRestaurantePorMail } from "./restauranteController.js";
import { buscarClientePorMail } from "./clienteController.js";
import { buscarRepartidorPorMail } from "./repartidorController.js";

const crearUsuario = async (usuario) => {
  let t;
  try {
    t = await Conexion.sequelize.transaction();
    const nuevoUsuario = await Usuario.create(usuario, { transaction: t });
    await t.commit();
    return nuevoUsuario;
  } catch (error) {
    if (t) {
      await t.rollback();
    }
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error("El correo electrónico ya está en uso");
    } else {
      throw error;
    }
  }
};

const buscarUsuarioPorMail = async (usuario) => {
  try {
    let usuarioEncontrado;
    console.log("Usuario del controlador:", usuario);
    const cliente = await buscarClientePorMail(usuario);
    if (cliente) {
      console.log(cliente);
      usuarioEncontrado = cliente;
    }
    const restaurante = await buscarRestaurantePorMail(usuario);
    if (restaurante) {
      console.log(restaurante);
      usuarioEncontrado = restaurante;
    }
    const repartidor = await buscarRepartidorPorMail(usuario);
    if (repartidor) {
      console.log(repartidor);
      usuarioEncontrado = repartidor;
    }

    return usuarioEncontrado;
  } catch (error) {
    throw new Error(
      "Error al buscar usuario por correo electrónico: " + error.message
    );
  }
};

export { crearUsuario, buscarUsuarioPorMail };
