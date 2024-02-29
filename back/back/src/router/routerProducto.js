/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

import express from "express";
import { listarProductos, listarProductosPorNombre, listarProductoPorId, crearProducto, editarProducto } from "../controllers/productosController.js";
const routerProducto = express.Router();

//✔️ - Finalizado
routerProducto.get("/producto", async (req, res) => {
    try {
        const productos = await listarProductos();
        console.log(productos);
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//✔️ - Finalizado
routerProducto.get("/producto/nombre/:nombre", async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const productoNombre = await listarProductosPorNombre(nombre);
        res.status(200).json(productoNombre);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
});

//✔️ - Finalizado
routerProducto.get("/producto/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const productoId = await listarProductoPorId(id);
        res.status(200).json(productoId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//✔️ - Finalizado
routerProducto.post("/producto/registro", async (req, res) => {
    try {
        console.log(req.body);
        //const restaurant = req.session.id;  
        const restaurant = req.user;  
        console.log(`routerProducto.js:54, ${restaurant}`); 
        const idRestaurant = restaurant.id
        const productoRegistro = await crearProducto(idRestaurant,req.body);
        res.status(201).json(productoRegistro);
    } catch (error) {
            res.status(500).json({ message: "Error interno del servidor" });
            console.log(error);
    }
});

//✔️ - Finalizado
routerProducto.patch("/producto/editar/:id", async (req, res) => {
    try {
        //const id = req.params.id;
        const idRestaurant = req.session.id;
        const producto = req.body;
        const productoEditado = await editarProducto(id, producto);
        console.log(productoEditado);
        res.status(200).json(productoEditado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default routerProducto;
