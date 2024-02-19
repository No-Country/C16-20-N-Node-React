/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import Restaurante from "../models/restaurante.js";
import Usuario from "../models/usuario.js";
import Conexion from "./conexion.js";
//✔️ - Finalizado
export const listarRestaurante = async () => {
  try {
    const restaurantes = await Restaurante.findAll({
      include: {
        model: Usuario,
      },
    });
    return restaurantes;
  } catch (error) {
    console.error("Error al listar restaurantes:", error);
    throw error;
  }
};
//✔️ - Finalizado
const listarRestaurantesPorRubro = async (rubro) => {
  try {
    const restauranteRubro = await Restaurante.findAll({
      where: { rubro_restaurant: rubro },
      include: {
        model: Usuario,
      },
    });
    if (restauranteRubro.length === 0) {
      throw new Error(`No hay registros de restaurantes con el rubro ${rubro}`);
    }
    return restauranteRubro;
  } catch (error) {
    throw error;
  }
};

/*
 * Carla, acá tuve que cambiar un detallito del metodo
usaste la funcion findAll() y eso te buscar en toda la base de datos
deberias usar una funcionaque se llama findByPk - ya lo corrijo
 */
//✔️ - Finalizado
const listarRestaurantesPorId = async (id) => {
  try {
    const restauranteId = await Restaurante.findByPk(id, {
      include: {
        model: Usuario,
      },
    });
    if (!restauranteId) {
      throw new Error(`No hay registros de restaurantes con el Id ${id}`);
    }
    return restauranteId;
  } catch (error) {
    throw error;
  }
};
/**
 * acá te volvio a pasar lo mismo, intentaste hacer un hibrido entre
 * el router y el controlador. Lo voy a corregir y dejarlo para que
 * funcione con el metodo post - Probalo con thunderClient
 */
//✔️ - Finalizado
/**
 * Actualizo:
 * tuve que usar una transaccion para que no se rompa la base de datos
 * porque aunque el metodo no te deja agregar un nuevo restaurante porque
 * el mail ya esta en uso, el id sigue incrementandose en la bd
 * es normal, pero podria llegar a dejar huecos que pueden causar un problema con
 * las relaciones
 */
const crearRestaurante = async (idUsuario, restaurant) => {
  const t = await Conexion.sequelize.transaction();
  try {
    const nuevoRestaurante = await Restaurante.create(
      { id_usuario: idUsuario, ...restaurant },
      { transaction: t }
    );
    await t.commit();
    return nuevoRestaurante;
  } catch (error) {
    await t.rollback();
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error("El correo electrónico ya está en uso");
    } else {
      throw error;
    }
  }
};
//✔️ - Finalizado
const editarRestaurante = async (id, restaurant) => {
  try {
    const restauranteEditado = await Restaurante.update(restaurant, {
      where: { id },
    });
    if (restauranteEditado[0] === 0) {
      throw new Error(`No hay registros de restaurantes con el id ${id}`);
    }
    return restauranteEditado;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new Error(
        "El correo electrónico ya está en uso, no se puede actualizar el restaurante"
      );
    } else {
      throw error;
    }
  }
};

export {
  listarRestaurantesPorRubro,
  listarRestaurantesPorId,
  crearRestaurante,
  editarRestaurante,
};

//TODO
// buscarRestaurantes por rubro ⏳
// buscar restaurantes por id ⏳
// crear datos de un restaurante ⚡
// editar datos de un restaurante ⚡
