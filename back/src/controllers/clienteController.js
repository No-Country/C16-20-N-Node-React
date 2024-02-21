/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import Cliente from "../models/cliente.js";
import Usuario from "../models/usuario.js";
import Conexion from "./conexion.js";

const listarClientes = async () => {
  try {
    const clientes = await Cliente.findAll({
      include: {
        model: Usuario,
      },
    });
    return clientes;
  } catch (error) {
    console.log("error al listar los clientes", error);
    throw error;
  }
};
/**
 * en teoria este controlador solo crea un nuevo cliente
 */
const crearCliente = async (idCliente, cliente) => {
  let t = await Conexion.sequelize.transaction();
  try {
    const nuevoCliente = await Cliente.create(
      { id_usuario: idCliente, ...cliente },
      { transaction: t }
    );
    await t.commit();
    return nuevoCliente;
  } catch (error) {
    await t.rollback();
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error("El correo electrónico ya está en uso");
    } else {
      throw error;
    }
  }
};
/**
 * el tema del error del mail, primero deberia buscarse en el modelo Usuario
 * este Modelo no conoce el mail del usuario que se registra todavia...
 * PENSANDO...
 */
export const buscarClientePorMail = async (usuario) => {
  try {
    const cliente = await Cliente.findAll({
      include: {
        model: Usuario,
        where: { mail: usuario.mail },
      },
    });
    return cliente;
  } catch (error) {
    console.error("Error al listar clientes:", error);
    throw error;
  }
};

export { listarClientes, crearCliente };

/**
 * hacer un post a un end point que llame al controlador de usuario
 * despues de eso, me devuelve el nuevo usuario, saco el id y el rol_usuario
 * y en base a eso redirecciono a un nuevo endpoint
 */