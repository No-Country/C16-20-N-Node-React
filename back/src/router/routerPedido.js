/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

import express from "express";
import {
  listarPedidos,
  listarPedidosPorCliente,
  listarPedidosPorRestaurant,
  listarPedidosPorRepartidor,
  listarPedidoPorId,
  crearPedido,
  editarPedido,
} from "../controllers/pedidosController.js";
import { obtenerRepartidorAleatorio } from "../controllers/repartidorController.js";
//import { permisoCliente, permisoRestaurant } from "../middleware/login.js";
const routerPedido = express.Router();

//✔️ - Finalizado
routerPedido.get("/pedido", async (req, res) => {
  try {
    const pedidos = await listarPedidos();
    console.log(pedidos);
    res.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//✔️ - Finalizado
routerPedido.get("/pedido/cliente/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //const id = req.session.id;
    const pedidoCliente = await listarPedidosPorCliente(id);
    res.status(200).json(pedidoCliente);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

//✔️ - Finalizado
routerPedido.get("/pedido/restaurante/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //const id = req.session.id;
    const pedidoRestaurant = await listarPedidosPorRestaurant(id);
    res.status(200).json(pedidoRestaurant);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

//✔️ - Finalizado
routerPedido.get("/pedido/repartidor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //const id = req.session.id;
    const pedidoRepartidor = await listarPedidosPorRepartidor(id);
    res.status(200).json(pedidoRepartidor);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

//✔️ - Finalizado
routerPedido.post("/pedido/registro/:id", async (req, res) => {
  try {
    //const idCliente = req.session.usuario.id_cliente;
    const id_cliente = req.params.id;
    const pedido = req.body;

    console.log(`routerPedido:81, ${JSON.stringify(pedido)}`);
    const repartidor = await obtenerRepartidorAleatorio();// Obtener un repartidor aleatorio
    console.log(`routerPedido:83, ${JSON.stringify(repartidor)}`);
    const id_repartidor = repartidor.id;
    const pedidoRegistro = await crearPedido(id_cliente, id_repartidor, pedido);
    res.status(201).json(pedidoRegistro);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
    console.log(error);
  }
});

//✔️ - Finalizado
routerPedido.patch("/pedido/editar/:id",//permisoCliente,//permisoRestaurant,
async (req, res) => {
    try {
      const id = req.params.id;
      const pedido = req.body;
      const pedidoEditado = await editarPedido(id, pedido);
      console.log(pedidoEditado);
      res.status(200).json(pedidoEditado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

export default routerPedido;
