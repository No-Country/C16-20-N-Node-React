/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import Pedidos from "../models/pedidos.js";
import Restaurante from "../models/restaurante.js";
import Cliente from "../models/cliente.js";
import Repartidor from "../models/repartidor.js";
import Conexion from "./conexion.js";

//⏳ - En proceso
const listarPedidos = async () => {
    try {
        const pedidos = await Pedidos.findAll({
            include: {
                model: Restaurante,
                model: Cliente,
                model: Repartidor
            },
        });
        console.log("productoController.js:13", pedidos);
        return pedidos;
    } catch (error) {
        console.log("error al listar los pedidos", error);
        throw error;
    }
};

//⏳ - En proceso
const listarPedidosPorNombre = async (nombre) => {
    try {
        const pedidosNombre = await Pedidos.findAll({
        where: { nombre_pedido: nombre },
            include: {
                model: Restaurante,
                model: Cliente,
                model: Repartidor
            },
        });
        if (pedidosNombre.length === 0) {
        throw new Error(`No hay registros de productos con el nombre ${nombre}`);
        }
        return pedidosNombre;
    } catch (error) {
        throw error;
    }
};

//⏳ - En proceso
const listarPedidoPorId = async (id) => {
    try {
        const pedidoId = await Pedidos.findByPk(id, {
            include: {
            model: Restaurante,
            model: Cliente,
            model: Repartidor
            },
        });
        if (!pedidoId) {
            throw new Error(`No hay registros de pedidos con el Id ${id}`);
        }
        return pedidoId;
    } catch (error) {
        throw error;
    }
};

// ⏳ - En proceso
const crearPedido = async (idRestaurant, idCliente, idRepartidor, pedido) => {
    let t = await Conexion.sequelize.transaction();
    try {
        const nuevoPedido = await pedido.create(
            { id_restaurant: idRestaurant, id_cliente: idCliente, id_repartidor: idRepartidor, ...pedido },
            { transaction: t }
        );
        await t.commit();
        return nuevoPedido;
    } catch (error) {
        throw error;
    }
};

// ⏳ - En proceso
const editarPedido = async (id, pedido) => {
    try {
        const pedidoEditado = await pedido.update(pedido, {
            where: {
                id_pedido: id,
            },
        });

        if (pedidoEditado[0] === 0) {
            throw new Error(`No hay registros de pedidos con el id ${id}`);
        }
        
        return pedidoEditado;
        } catch (error) {
            throw error;
    }
};

export { listarPedidos, listarPedidosPorNombre, listarPedidoPorId, crearPedido, editarPedido };
