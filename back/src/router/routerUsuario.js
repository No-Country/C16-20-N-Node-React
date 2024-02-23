import express from "express";
import {
  crearUsuario,
  buscarUsuario,
  buscarUsuarioPorMail,
} from "../controllers/usuarioController.js";
const routerUsuario = express.Router();
/**
 * modificar tablas
 * manejar errores y redireccionar
 */

/**
 * este endpoint busca un usuario (solo mail y contraseña) por Mail y lo devuelve.
 */
routerUsuario.post("/usuario/registro", async (req, res) => {
  try {
    const usuario = req.body;
    const usuarioExistente = await buscarUsuarioPorMail(usuario);
    if (!usuarioExistente) {
      const nuevoUsuario = await crearUsuario(usuario);
      return res.status(201).json(nuevoUsuario);
    }
    console.log(usuarioExistente);
    res.status(200).json(usuarioExistente);
  } catch (error) {
    if (error.message === "El correo electrónico ya está en uso") {
      return res.status(409).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
});

export default routerUsuario;
