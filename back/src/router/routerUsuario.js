import express from "express";
import {
  crearUsuario,
  buscarUsuarioPorMail,
} from "../controllers/usuarioController.js";
const routerUsuario = express.Router();

routerUsuario.post("/usuario/registro", async (req, res) => {
  try {
    const usuario = req.body;
    const usuarioExistente = await buscarUsuarioPorMail(usuario);
    if (usuarioExistente) {
      console.log(usuarioExistente);
      return res.status(409).json({ usuarioExistente });
    } else {
      const nuevoUsuario = await crearUsuario(usuario);
      console.log(nuevoUsuario);
      return res.status(201).json(nuevoUsuario);
    }
  } catch (error) {
    if (error.message === "El correo electrónico ya está en uso") {
      return res.status(409).json({
        message: "El correo electrónico ya está en uso",
        usuario: usuarioExistente,
      });
    } else {
      console.error("Error al registrar usuario:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
});

export default routerUsuario;
