import express from "express";
import {
  crearRepartidor,
  buscarRepartidorPorMail,
} from "../controllers/repartidorController.js";
import { autenticado, ensureAuthenticated } from "../middleware/login.js";
const routerRepartidor = express.Router();

// routerRepartidor.post("/login", autenticado);

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

export default routerRepartidor;
