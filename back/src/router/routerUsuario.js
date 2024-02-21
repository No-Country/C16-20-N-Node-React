import express from "express";
import {
  crearUsuario,
  buscarUsuarioPorMail,
} from "../controllers/usuarioController.js";
const routerUsuario = express.Router();
// ⏳ - En proceso
// ⚡ - urgente

routerUsuario.post("/usuario/registro", async (req, res) => {
  try {
    const usuario = req.body;
    const usuarioExistente = await buscarUsuarioPorMail(usuario);
    if (usuarioExistente) {
      console.log(usuarioExistente);
      return res.status(409).json({
        message: "El usuario ya está registrado",
        usuario: usuarioExistente, // Aquí incluyes el usuario existente en la respuesta JSON
      });
    } else {
      const nuevoUsuario = await crearUsuario(usuario);
      return res.status(201).json(nuevoUsuario);
    }
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default routerUsuario;
