/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import express from "express";
import {
  listarRestaurante,
  listarRestaurantesPorRubro,
} from "../controllers/restauranteController.js";
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

//routerRestaurante.get("/restaurante/:rubro", listarRestaurantesPorRubro());

routerRestaurante.get("/restaurante/:rubro", async (req, res) => {
  try {
    const rubro = req.params.rubro;
    const restauranteRubro = await listarRestaurantesPorRubro(rubro);
    console.log(restauranteRubro);
    res.status(200).json(restauranteRubro);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//TODO
// realizar los diferentes endpoints para cada método del controlador
// por ejemplo para editar un restaurant usar '/editar/restaurant/:id'
// probar la solicitud get desde el navegador y los post desde ThunderClient

export default routerRestaurante;
