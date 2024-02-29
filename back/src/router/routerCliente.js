/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import { listarClientes } from "../controllers/clienteController.js";
import express from "express";
import { ensureAuthenticated, permisoCliente } from "../middleware/login.js";
const routerCliente = express.Router();

routerCliente.get("/clientes", permisoCliente, async (req, res) => {
  try {
    const clientes = await listarClientes();
    res.status(200).json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default routerCliente;
