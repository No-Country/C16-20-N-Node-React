/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

import express from "express";
import {
  crearRepartidor,
  buscarRepartidorPorMail,
  listarRepartidor,
  listarRepartidorPorId,
  editarRepartidor,
  obtenerRepartidorAleatorio
} from "../controllers/repartidorController.js";
import {
  autenticado,
  ensureAuthenticated,
  permisoCliente,
  permisoRepartidor,
  permisoRestaurant,
} from "../middleware/login.js";
const routerRepartidor = express.Router();

routerRepartidor.get("/repartidores", ensureAuthenticated, async (req, res) => {
  try {
    console.log(req.user);
    const repartidores = await listarRepartidor();
    console.log(repartidores);
    res.status(200).json(repartidores);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//✔️ - Finalizado
routerRepartidor.get("/repartidor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const repartidorId = await listarRepartidorPorId(id);
    res.status(200).json(repartidorId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//⏳ - En proceso
routerRepartidor.post(
  "/repartidor/registro",
  //permisoRepartidor,
  async (req, res) => {
    try {
      const repartidorRegistro = await crearRepartidor(req.body);
      res.status(201).json(repartidorRegistro);
    } catch (error) {
      if (error.message === "El correo electrónico ya está en uso") {
        res.status(409).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Error interno del servidor" });
      }
    }
  }
);

routerRepartidor.post("/repartidor/buscar",async (req, res) => {
    try {
      const repartidorAleatorio = await obtenerRepartidorAleatorio();;
      res.status(201).json(repartidorAleatorio);
    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
  }
);

//✔️ - Finalizado
routerRepartidor.patch(
  "/repartidor/editar/:id",
  //permisoRepartidor,
  async (req, res) => {
    try {
      //const id = req.session.usuario.id_repartidor;
      const id = req.params.id;
      const repartidor = req.body;
      const repartidorEditado = await editarRepartidor(id, repartidor);
      res.status(200).json(repartidorEditado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

export default routerRepartidor;
