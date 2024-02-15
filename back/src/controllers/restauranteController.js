/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import Restaurante from "../models/restaurante.js";

export const listarRestaurante = async () => {
  try {
    const restaurantes = await Restaurante.findAll();
    return restaurantes;
  } catch (error) {
    console.error("Error al listar restaurantes:", error);
    throw error;
  }
};
