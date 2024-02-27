import express from "express";
import {
  crearUsuario,
  buscarUsuarioPorMail,
  compararPass,
} from "../controllers/usuarioController.js";
import { autenticado, ensureAuthenticated } from "../middleware/login.js";
const routerUsuario = express.Router();

routerUsuario.post("/login", autenticado);

routerUsuario.get("/perfil", ensureAuthenticated, async (req, res) => {
  try {
    const usuario = req.user;
    console.log(usuario);
    res.status(200).json(usuario);
  } catch (error) {
    res
      .status(404)
      .json({ error: "No se pudo obtener la información del usuario" });
  }
});

routerUsuario.post("/usuario/registro", async (req, res) => {
  try {
    const usuario = req.body;
    const usuarioExistente = await buscarUsuarioPorMail(usuario);
    if (!usuarioExistente) {
      const nuevoUsuario = await crearUsuario(usuario);
      console.log(nuevoUsuario);
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

routerUsuario.get("/logout", async (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        console.error("Error en logout", err);
        return next(err);
      }
      res.redirect("/");
    });
  } catch (error) {
    console.error("Error en logout", error);
    res.status(500).json(error);
  }
});

export default routerUsuario;
