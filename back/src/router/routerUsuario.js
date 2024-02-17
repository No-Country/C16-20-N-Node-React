import express from "express";
import { crearUsuario } from "../controllers/usuarioController.js";
const routerUsuario = express.Router();
// ⏳ - En proceso
// ⚡ - urgente


routerUsuario.post("/Usuario/registro", async (req, res) => {
    try {
      const usuarioRegistro= await crearUsuario(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });
  

export default routerUsuario;