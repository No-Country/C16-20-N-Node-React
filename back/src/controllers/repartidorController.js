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