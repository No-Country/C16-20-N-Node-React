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
import Producto from "../models/productos.js";
import Conexion from "./conexion.js";
import Status from "../models/status.js";
import Pagos from "../models/pagos.js";

//✔️ - Finalizado
const listarPedidos = async () => {
  try {
    const pedidos = await Pedidos.findAll({
      include: [Restaurante, Cliente, Repartidor],
    });
    console.log("productoController.js:13", pedidos);
    return pedidos;
  } catch (error) {
    console.log("error al listar los pedidos", error);
    throw error;
  }
};

//✔️ - Finalizado
const listarPedidoPorId = async (id) => {
  try {
    const pedidoId = await Pedidos.findByPk(id, {
      include: [Restaurante, Cliente, Repartidor],
    });
    if (!pedidoId) {
      throw new Error(`No hay registros de pedidos con el Id ${id}`);
    }
    return pedidoId;
  } catch (error) {
    throw error;
  }
};

//✔️ - Finalizado
const listarPedidosPorCliente = async (id) => {
  try {
    const pedidosCliente = await Pedidos.findAll({
      where: { id_cliente: id },
      include: [Restaurante, Cliente, Repartidor],
    });
    if (pedidosCliente.length === 0) {
      throw new Error(`No hay registros de productos con el cliente ${id}`);
    }
    return pedidosCliente;
  } catch (error) {
    throw error;
  }
};

//✔️ - Finalizado
const listarPedidosPorRestaurant = async (id) => {
  try {
    const pedidosRestaurant = await Pedidos.findAll({
      where: { id_restaurant: id },
      include: [Restaurante, Cliente, Repartidor, Status, Pagos],
    });
    if (pedidosRestaurant.length === 0) {
      throw new Error(`No hay registros de productos con el restaurant ${id}`);
    }
    return pedidosRestaurant;
  } catch (error) {
    throw error;
  }
};

//✔️ - Finalizado
const listarPedidosPorRepartidor = async (id) => {
  try {
    const pedidosRepartidor = await Pedidos.findAll({
      where: { id_repartidor: id },
      include: [Restaurante, Cliente, Repartidor],
    });
    if (pedidosRepartidor.length === 0) {
      throw new Error(`No hay registros de productos con el repartidor ${id}`);
    }
    return pedidosRepartidor;
  } catch (error) {
    throw error;
  }
};

//✔️ - Finalizado
const crearPedido = async (id_cliente, id_repartidor, pedido) => {
  let t = await Conexion.sequelize.transaction();
  console.log(`pedidosController:93, ${JSON.stringify(pedido)}`);
  try {
    const nuevoPedido = await Pedidos.create(
      {
        id_cliente,
        cantidad: pedido.cantidad,
        id_producto: pedido.producto.id,
        id_restaurant: pedido.producto.id_restaurant,
        id_pago: pedido.id_pago,
        id_repartidor,
        descripcion: pedido.descripcion,
        id_status: pedido.id_status,
        //...pedido },
      },
      { transaction: t }
    );
    await t.commit();
    return nuevoPedido;
  } catch (error) {
    throw error;
  }
};

//✔️ - Finalizado
const editarPedido = async (id, pedido) => {
  try {
    const pedidoEditado = await Pedidos.update(pedido, {
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

export {
  listarPedidos,
  listarPedidosPorCliente,
  listarPedidosPorRestaurant,
  listarPedidosPorRepartidor,
  listarPedidoPorId,
  crearPedido,
  editarPedido,
};
