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

const listarRestaurantesPorRubro = async (rubro) => {
  try {
    const restauranteRubro = await Restaurante.findAll({
      where: { rubro_restaurant: rubro },
    });
    return restauranteRubro;
  } catch (error) {
    console.error("Error al listar restaurantes por rubro:", error);
    throw error;
  }
};

export { listarRestaurantesPorRubro };

//TODO
// buscarRestaurantes por rubro ⏳
// buscar restaurantes por id ⚡
// editar datos de un restaurante ⚡
