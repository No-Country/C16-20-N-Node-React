/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import express from "express";
import { listarRestaurante } from "../controllers/restauranteController.js";
// import { handleError } from "../helpers/error.js";
const routerRestaurante = express.Router();
// ⏳ - En proceso
// ⚡ - urgente
routerRestaurante.get("/restaurante", async (req, res) => {
  try {
    const restaurante = await listarRestaurante();
    console.log(restaurante);
    res.status(200).json(restaurante);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default routerRestaurante;
