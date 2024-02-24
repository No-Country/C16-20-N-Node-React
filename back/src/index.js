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
import cors from "cors";
import Conexion from "./controllers/conexion.js";
import routerRestaurante from "./router/routerRestaurante.js";
import routerCliente from "./router/routerCliente.js";
import routerUsuario from "./router/routerUsuario.js";
import routerProducto from "./router/routerProducto.js";
import routerPedido from "./router/routerPedido.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));
/**
 * ruteo al restaurante
 */
// ✔️ - Finalizado
app.use("/", routerRestaurante);
app.use("/", routerCliente);
app.use("/", routerUsuario);
app.use("/", routerProducto);
app.use("/", routerPedido);
const port = process.env.PORT || 3000;
/**
 * ruta de acceso publico
 * acá podria ir el login
 */
app.get("/", (req, res) => {
  Conexion.conectar(); //prueba que se conecta a la base de datos
  res.send("La aplicación está funcionando!!! 😁😁😁");
});

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
