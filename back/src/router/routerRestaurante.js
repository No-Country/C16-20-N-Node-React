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
  listarRestaurantesPorId,
  crearRestaurante,
  editarRestaurante,
} from "../controllers/restauranteController.js";
const routerRestaurante = express.Router();
// ✔️ - Finalizado
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

//✔️ - Finalizado
routerRestaurante.get("/restaurante/rubro/:rubro", async (req, res) => {
  try {
    const rubro = req.params.rubro;
    const restauranteRubro = await listarRestaurantesPorRubro(rubro);
    res.status(200).json(restauranteRubro);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

//✔️ - Finalizado
routerRestaurante.get("/restaurante/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const restauranteId = await listarRestaurantesPorId(id);
    res.status(200).json(restauranteId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
//✔️ - Finalizado
routerRestaurante.post("/restaurante/registro", async (req, res) => {
  try {
    const restauranteRegistro = await crearRestaurante(req.body);
    res.status(201).json(restauranteRegistro);
  } catch (error) {
    if (error.message === "El correo electrónico ya está en uso") {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
});
//✔️ - Finalizado
routerRestaurante.patch(
  "/restaurante/editar/:id",
  //permisoRestaurant,
  async (req, res) => {
    try {
      //const id = req.session.usuario.id;
      const id = req.params.id;
      const restaurante = req.body;
      const restauranteEditado = await editarRestaurante(id, restaurante);
      res.status(200).json(restauranteEditado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

//TODO
// realizar los diferentes endpoints para cada método del controlador
// por ejemplo para editar un restaurant usar '/editar/restaurant/:id'
// probar la solicitud get desde el navegador y los post desde ThunderClient

export default routerRestaurante;
