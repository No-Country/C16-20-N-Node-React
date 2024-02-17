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

// const crearRestaurante = async (req, res) => {
//   try {
//       const { nombre_restaurant, direccion_restaurant, mail_restaurant, telefono_restaurant, rubro_restaurant, rol_usuario } = req.body;
      
//       const newRestaurante = new Restaurante({ nombre_restaurant, direccion_restaurant, mail_restaurant, telefono_restaurant, rubro_restaurant, rol_usuario }); // Crea un nuevo usuario
//       await create(newRestaurante); // Guarda el restaurante en la base de datos
//       res.status(201).json({ message: 'Restaurante creado con éxito', Restaurante: newRestaurante });
//       //console.log(req.body)
//   } catch (error) {
//       res.status(500).json({ message: error.message });
//       //console.log(error)
//   }
// };

export { 
  listarRestaurantesPorRubro,
  listarRestaurantesPorId
}

//TODO
// buscarRestaurantes por rubro ⏳
// buscar restaurantes por id ⏳
// editar datos de un restaurante ⚡
