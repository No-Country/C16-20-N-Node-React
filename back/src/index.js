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
import routerRepartidor from "./router/routerRepartidor.js";
import expressSession from "express-session";
import cookieParser from "cookie-parser";
import { autenticado, ensureAuthenticated } from "./middleware/login.js";
import passport from "passport";
// import { autenticado } from "./middleware/login.js";
dotenv.config();
const app = express();
// const corsOptions = {
//   origin: '*',
//   credentials: true
// };
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
/**
 * ruteo al restaurante
 */
// ✔️ - Finalizado
app.get("/", (req, res) => {
  Conexion.conectar(); //prueba que se conecta a la base de datos
  res.send("La aplicación está funcionando!!! 😁😁😁");
});
app.use("/", routerUsuario);
app.use("/", ensureAuthenticated, routerRepartidor);
app.use("/", ensureAuthenticated, routerRestaurante);
app.use("/", ensureAuthenticated, routerCliente);
app.use("/", ensureAuthenticated, routerProducto);
app.use("/", ensureAuthenticated, routerPedido);
const port = process.env.PORT || 3000;
/**
 * ruta de acceso publico
 * acá podria ir el login
 */

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
