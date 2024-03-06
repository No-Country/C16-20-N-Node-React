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
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import Conexion from "./controllers/conexion.js";
import routerRestaurante from "./router/routerRestaurante.js";
import routerCliente from "./router/routerCliente.js";
import routerUsuario from "./router/routerUsuario.js";
import routerProducto from "./router/routerProducto.js";
import routerPedido from "./router/routerPedido.js";
import routerRepartidor from "./router/routerRepartidor.js";
import routerPago from "./router/routerPago.js";
import routerStatus from "./router/routerStatus.js";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import { autenticado, ensureAuthenticated } from "./middleware/login.js";
import passport from "passport";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRETO));
app.use(
  expressSession({
    secret: process.env.SECRETO,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, // 24 horas
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
// ✔️ - Finalizado
app.get("/", (req, res) => {
  Conexion.conectar(); //prueba que se conecta a la base de datos
  res.send("La aplicación está funcionando!!! 😁😁😁");
});
app.use("/", routerUsuario);
app.use("/", routerRepartidor);
app.use("/", routerRestaurante);
app.use("/", routerCliente);
app.use("/", routerProducto);
app.use("/", routerPedido);
app.use("/", routerPago);
app.use("/", routerStatus);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
