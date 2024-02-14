/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import express, { urlencoded } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { ejecutarQuery } from "./controllers/conexion.js";
import routerRestaurante from "./router/routerRestaurante.js";
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));
/**
 * ruteo al restaurante
 */
// ✔️ - Finalizado
app.use("/", routerRestaurante);
const port = process.env.PORT || 3000;
/**
 * ruta de acceso publico
 * acá podria ir el login
 */
app.get("/", (req, res) => {
  ejecutarQuery("SELECT 1"); //prueba que se conecta a la base de datos
  res.send("La aplicación está funcionando!!! 😁😁😁");
});

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
