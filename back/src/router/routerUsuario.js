import express from "express";
import {
  crearUsuario,
  buscarUsuarioPorMail,
  compararPass,
} from "../controllers/usuarioController.js";
import { autenticado, ensureAuthenticated } from "../middleware/login.js";
const routerUsuario = express.Router();
import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 60000000 },
});

routerUsuario.post("/login", autenticado);

routerUsuario.get("/perfil", async (req, res) => {
  try {
    const usuario = req.session.usuario;
    console.log(usuario);
    res.status(200).json(usuario);
  } catch (error) {
    res
      .status(404)
      .json({ error: "No se pudo obtener la información del usuario" });
  }
});

routerUsuario.post(
  "/usuario/registro",
  upload.single("logo"),
  async (req, res) => {
    try {
      console.log(req.body);
      const usuario = req.body;
      const usuarioRegistro = await crearUsuario(usuario);
      
      res.status(201).json(usuarioRegistro);
    } catch (error) {
      if (error.message === "El correo electrónico ya está en uso") {
        return res.status(409).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "Error interno del servidor" });
      }
    }
  }
);

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
