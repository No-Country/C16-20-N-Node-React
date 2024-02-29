/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import Repartidor from "../models/repartidor.js";
import Usuario from "../models/usuario.js";

export const buscarRepartidorPorMail = async (usuario) => {
  try {
    const repartidorEncontrado = await Repartidor.findOne({
      include: {
        model: Usuario,
        where: { mail: usuario.mail },
      },
    });
    return repartidorEncontrado;
  } catch (error) {
    throw error;
  }
};

// Obtener un repartidor aleatorio
const repartidorAleatorio = async (req,res) => {
    try {    
        const repartidorAleatorio = await Repartidor.findOne({
            order: Sequelize.literal('random()'), // Ordenar aleatoriamente
        });
        if (!repartidorAleatorio) {
            throw new Error('No se encontraron repartidores disponibles');
        }
        return repartidorAleatorio;
    } catch (error) {
      throw error;
    }
};

//⏳ - En proceso
const crearRepartidor = async (idUsuario, repartidor) => {
  let t = await Conexion.sequelize.transaction();
  try {
    const nuevoRepartidor = await Repartidor.create(
      { id_usuario: idUsuario, ...repartidor },
      { transaction: t }
    );
    await t.commit();
    return nuevoRepartidor;
  } catch (error) {
    await t.rollback();
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error("El correo electrónico ya está en uso");
    } else {
      throw error;
    }
  }
};

const listarRepartidor = async () => {
  try {
    const repartidores = await Repartidor.findAll();
    if (!repartidores || repartidores.length === 0) {
      throw new Error("No hay repartidores");
    }
    return repartidores;
  } catch (error) {
    throw error;
  }
};

//✔️ - Finalizado
const listarRepartidorPorId = async (id) => {
  try {
    const repartidorId = await Repartidor.findByPk(id, {
      include: {
        model: Usuario,
      },
    });
    if (!repartidorId) {
      throw new Error(`No hay registros de repartidores con el Id ${id}`);
    }
    return repartidorId;
  } catch (error) {
    throw error;
  }
};
//✔️ - Finalizado
const editarRepartidor = async (id, repartidor) => {
  try {
    const repartidorEditado = await Repartidor.update(repartidor, {
      where: { id_repartidor:id },
    });
    if (repartidorEditado[0] === 0) {
      throw new Error(`No hay registros de repartidores con el id ${id}`);
    }
    return repartidorEditado;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error(
        "El correo electrónico ya está en uso, no se puede actualizar el repartidor"
      );
    } else {
      throw error;
    }
  }
};

export {crearRepartidor, repartidorAleatorio, listarRepartidor, listarRepartidorPorId, editarRepartidor}