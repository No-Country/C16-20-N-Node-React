/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import Producto from "../models/productos.js";
import Restaurante from "../models/restaurante.js";
import Conexion from "./conexion.js";

//✔️ - Finalizado
const listarProductos = async () => {
    console.log("productoController.js:13");
    try {
        const productos = await Producto.findAll({
            include: {
                model: Restaurante,
            },
        });
        return productos;
    } catch (error) {
        console.log("error al listar los productos", error);
        throw error;
    }
};

//✔️ - Finalizado
const listarProductosPorNombre = async (nombre) => {
    try {
        const productoNombre = await Producto.findAll({
        where: { nombre_producto: nombre },
        include: {
            model: Restaurante,
        },
        });
        if (productoNombre.length === 0) {
        throw new Error(`No hay registros de productos con el nombre ${nombre}`);
        }
        return productoNombre;
    } catch (error) {
        throw error;
    }
};

//✔️ - Finalizado
const listarProductoPorId = async (id) => {
    try {
        const productoId = await Producto.findByPk(id, {
            include: {
            model: Restaurante,
            },
        });
        if (!productoId) {
            throw new Error(`No hay registros de productos con el Id ${id}`);
        }
        return productoId;
    } catch (error) {
        throw error;
    }
};

//✔️ - Finalizado
const crearProducto = async (idRestaurant, producto) => {
    let t = await Conexion.sequelize.transaction();
    try {
        const nuevoProducto = await Producto.create(
        { id_restaurant: idRestaurant, ...producto },
        { transaction: t }
        );
        await t.commit();
        return nuevoProducto;
    } catch (error) {
        throw error;
    }
};

//✔️ - Finalizado
const editarProducto = async (id, producto) => {
    try {
        console.log("productosController.js:81",id , producto);
        const productoEditado = await Producto.update(producto, {
            where: {
                id_producto: id,
            },
        });

        if (productoEditado[0] === 0) {
            throw new Error(`No hay registros de productos con el id ${id}`);
        }
        
        return productoEditado;
        } catch (error) {
            throw error;
    }
};

export { listarProductos, listarProductosPorNombre, listarProductoPorId, crearProducto, editarProducto };
