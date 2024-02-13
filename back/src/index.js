import express, { urlencoded } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { conn } from "./controllers/conexion.js";
import routerRestaurante from "./router/routerRestaurante.js";
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use("/", routerRestaurante);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  conn; //veririfica que se conecta a la base de datos
  res.send("La aplicación está funcionando!!! 😁😁😁");
});

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
