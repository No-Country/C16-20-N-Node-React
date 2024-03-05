/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */

import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
class Conexion {
  static sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_DATABASE,
    logging: false,
  });
  static async conectar() {
    try {
      await this.sequelize.authenticate();
      // console.log("Conexion ==> Exitosa");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }
}

export default Conexion;
