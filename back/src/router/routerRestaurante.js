import express from "express";
// import {} from "../controllers/controllerRestaurante.js";
import { handleError } from "../helpers/error.js";
const routerRestaurante = express.Router();

routerRestaurante.get("/restaurante", (req, res) => {
  try {
    res.json({ respuesta: "hola desde el endpoint de restaurantes" });
  } catch (error) {
    handleError(error, res);
  }
});

export default routerRestaurante;
