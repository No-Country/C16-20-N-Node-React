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

//✔️ - Finalizado
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

//⏳ - En proceso
const crearCliente = async (idUsuario, cliente) => {
  let t = await Conexion.sequelize.transaction();
  try {
    const nuevoCliente = await Cliente.create(
      { id_usuario: idUsuario, ...cliente },
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
//⏳ - En proceso
export const buscarClientePorMail = async (usuario) => {
  try {
    const cliente = await Cliente.findOne({
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

//✔️ - Finalizado
const listarClientesPorId = async (id) => {
  try {
    const clienteId = await Cliente.findByPk(id, {
      include: {
        model: Usuario,
      },
    });
    if (!clienteId) {
      throw new Error(`No hay registros de clientes con el Id ${id}`);
    }
    return clienteId;
  } catch (error) {
    throw error;
  }
};


//✔️ - Finalizado
const editarCliente = async (id, cliente) => {
  try {
    const clienteEditado = await Cliente.update(cliente, {
      where: { id_cliente:id },
    });
    if (clienteEditado[0] === 0) {
      throw new Error(`No hay registros de clientes con el id ${id}`);
    }
    return clienteEditado;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error(
        "El correo electrónico ya está en uso, no se puede actualizar el cliente"
      );
    } else {
      throw error;
    }
  }
};

export { listarClientes, crearCliente, listarClientesPorId, editarCliente };

/**
 * hacer un post a un end point que llame al controlador de usuario
 * despues de eso, me devuelve el nuevo usuario, saco el id y el rol_usuario
 * y en base a eso redirecciono a un nuevo endpoint
 */
