/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import {
  listarClientes,
  crearCliente,
  listarClientesPorId,
  editarCliente,
} from "../controllers/clienteController.js"; //listarClientesPorId / editarCliente
import express from "express";
import { permisoCliente } from "../middleware/login.js";
const routerCliente = express.Router();

//✔️ - Finalizado
routerCliente.get("/clientes", permisoCliente, async (req, res) => {
  try {
    const clientes = await listarClientes();
    res.status(200).json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//✔️ - Finalizado
routerCliente.get("/clientes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const clienteId = await listarClientesPorId(id);
    res.status(200).json(clienteId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//⏳ - En proceso
routerCliente.post("/cliente/registro", permisoCliente, async (req, res) => {
  try {
    const clienteRegistro = await crearCliente(req.body);
    res.status(201).json(clienteRegistro);
  } catch (error) {
    if (error.message === "El correo electrónico ya está en uso") {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
});

//✔️ - Finalizado
routerCliente.patch("/cliente/editar/:id", permisoCliente, async (req, res) => {
  try {
    const id = req.session.usuario.id_cliente;
    const cliente = req.body;
    const clienteEditado = await editarCliente(id, cliente);
    res.status(200).json(clienteEditado);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default routerCliente;
