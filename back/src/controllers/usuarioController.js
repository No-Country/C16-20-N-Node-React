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
    console.log("Usuario del controlador:", usuario);
    if (usuario.rol_usuario === "cliente") {
      const cliente = await buscarClientePorMail(usuario);
      console.log(cliente);
      return cliente;
    } else if (usuario.rol_usuario === "repartidor") {
      const repartidor = await buscarRepartidorPorMail(usuario);
      console.log(repartidor);
      return repartidor;
    } else if (usuario.rol_usuario === "restaurante") {
      const restaurante = await buscarRestaurantePorMail(usuario);
      console.log(restaurante);
      return restaurante;
    }
  } catch (error) {
    throw new Error(
      "Error al buscar usuario por correo electrónico: " + error.message
    );
  }
};

export { crearUsuario, buscarUsuarioPorMail };
