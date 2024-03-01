/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

import express from "express";
import {
  listarProductos,
  listarProductosPorNombre,
  listarProductoPorId,
  listarProductosPorRestaurant,
  crearProducto,
  editarProducto,
} from "../controllers/productosController.js";
import { permisoRestaurant } from "../middleware/login.js";
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
routerProducto.get("/producto/restaurant/:id_restaurant", async (req, res) => {
  try {
    const id_restaurant = req.params.id_restaurant;
    const productoRestaurant = await listarProductosPorRestaurant(
      id_restaurant
    );
    res.status(200).json(productoRestaurant);
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
routerProducto.post(
  "/producto/registro",
  permisoRestaurant,
  async (req, res) => {
    try {
      const idRestaurant = req.session.usuario.id;
      const productoRegistro = await crearProducto(idRestaurant, req.body);
      res.status(201).json(productoRegistro);
    } catch (error) {
      res.status(500).json({ message: "Error interno del servidor" });
      console.log(error);
    }
  }
);

//✔️ - Finalizado
routerProducto.patch(
  "/producto/editar/:id",
  permisoRestaurant,
  async (req, res) => {
    try {
      //const id = req.params.id;
      const idRestaurant = req.session.usuario.id;
      const producto = req.body;
      const productoEditado = await editarProducto(idRestaurant, producto);
      console.log(productoEditado);
      res.status(200).json(productoEditado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

export default routerProducto;
