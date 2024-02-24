/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

import express from "express";
import { listarPedidos, listarPedidosPorNombre, listarPedidoPorId, crearPedido, editarPedido } from "../controllers/pedidosController.js";
const routerPedido = express.Router();

//⏳ - En proceso
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

//⏳ - En proceso
routerPedido.get("/pedido/nombre/:nombre", async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const pedidoNombre = await listarPedidosPorNombre(nombre);
        res.status(200).json(pedidoNombre);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
});

//⏳ - En proceso
routerPedido.get("/pedido/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const pedidoId = await listarPedidoPorId(id);
        res.status(200).json(pedidoId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//⏳ - En proceso
routerPedido.post("/pedido/registro", async (req, res) => {
    try {
        const pedidoRegistro = await crearPedido(req.body);
        res.status(201).json(pedidoRegistro);
    } catch (error) {
            res.status(500).json({ message: "Error interno del servidor" });
            console.log(error);
    }
});

//⏳ - En proceso
routerPedido.patch("/pedido/editar/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const pedido = req.body;
        const pedidoEditado = await editarPedido(id, pedido);
        console.log(pedidoEditado);
        res.status(200).json(pedidoEditado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default routerPedido;