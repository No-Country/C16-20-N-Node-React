/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import express from "express";
import { listarRestaurante, listarRestaurantesPorRubro, listarRestaurantesPorId, crearRestaurante } from "../controllers/restauranteController.js";
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

routerRestaurante.get("/restaurante/rubro/:rubro", async (req, res) => {
  try {
    const rubro = req.params.rubro;
    const restauranteRubro = await listarRestaurantesPorRubro(rubro);
    if (restauranteRubro.length > 0) {
      res.status(200).json(restauranteRubro);
    } else {
      res.status(404).json({ message: `No hay registros de restaurantes en el rubro ${rubro}`});
    }  
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

routerRestaurante.get("/restaurante/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const restauranteId= await listarRestaurantesPorId(id);
    if (restauranteId.length > 0) {
      res.status(200).json(restauranteId);
    } else {
      res.status(404).json({ message: `No hay registros de restaurantes con el Id ${id}`});
    }  
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

routerRestaurante.post("/restaurante/registro", async (req, res) => {
  try {
    const restauranteRegistro= await crearRestaurante(req, res);
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