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
      where: { rubro_restaurant:rubro }
    });
    return restauranteRubro;
  } catch (error) {
    console.error("Error al listar restaurantes por rubro:", error);
    throw error;
  }
};

const listarRestaurantesPorId = async (id) => {
  try {
    const restauranteId = await Restaurante.findAll({
      where: { id:id }
    });
    return restauranteId;
  } catch (error) {
    console.error("Error al listar restaurantes por Id:", error);
    throw error;
  }
};

const crearRestaurante = async (req, res) => {
  try {
    usuario = await crearUsuario(req, res);
    idUsuario = usuario[0];
    const { nombre, direccion, mail, telefono, rubro } = req.body;
    const restaurante = await Restaurante.create({
      nombre_restaurante: nombre,
      dirección_restaurante: direccion,
      mail_restaurant: mail,
      telefono_restaurant:telefono,
      rubro_restaurante: rubro,
      id: idUsuario
    });

    return restaurante;
    res.status(200).json({ message: 'Restaurante creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el restaurante:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el restaurante' });
  }
};

export { 
  listarRestaurantesPorRubro,
  listarRestaurantesPorId,
  crearRestaurante
}

//TODO
// buscarRestaurantes por rubro ⏳
// buscar restaurantes por id ⏳
// crear datos de un restaurante ⚡
// editar datos de un restaurante ⚡
