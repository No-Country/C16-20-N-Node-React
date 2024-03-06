import express from "express";
import {
    listarPagos,
    listarPagosPorId,
} from "../controllers/pagoController.js";
const routerPago = express.Router();

//✔️ - Finalizado
routerPago.get("/pagos", async (req, res) => {
    try {
        const pagos = await listarPagos();
        res.status(200).json(pagos);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//✔️ - Finalizado
routerPago.get("/pagos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pagoId = await listarPagosPorId(id);
    res.status(200).json(pagoId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default routerPago;
