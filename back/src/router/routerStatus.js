import express from "express";
import {
    listarStatus,
    listarStatusPorId,
} from "../controllers/statusController.js";
const routerStatus = express.Router();

//✔️ - Finalizado
routerStatus.get("/status", async (req, res) => {
    try {
        const status = await listarStatus();
        res.status(200).json(status);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//✔️ - Finalizado
routerStatus.get("/status/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const statusId = await listarStatusPorId(id);
    res.status(200).json(statusId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default routerStatus;