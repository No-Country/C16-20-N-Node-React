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

const listarRestaurantesPorRubro = async (req,res) => {
  try {
    const rubro = req.params.rubro;
    const restaurantes = await Restaurante.findAll({
      where: { rubro_restaurant:rubro }
    });
    if (restaurantes.length > 0) {
      res.status(200).json(restaurantes);
    } else {
      res.status(404).json({ message: `No hay registros de restaurantes en el rubro ${rubro}`});
    }
  } catch (error) {
    console.error("Error al listar restaurantes por rubro:", error);
    throw error;
  }
};

export { 
  listarRestaurantesPorRubro 
}

//TODO
// buscarRestaurantes por rubro ⏳
// buscar restaurantes por id ⚡
// editar datos de un restaurante ⚡
