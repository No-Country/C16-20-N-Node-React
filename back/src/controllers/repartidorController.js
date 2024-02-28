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

export const crearRepartidor = async (repartidor) => {
  try {
    const nuevoRepartidor = await Repartidor.create(repartidor);
    return nuevoRepartidor;
  } catch (error) {
    throw error;
  }
};

export const listarRepartidor = async () => {
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
