import mysql from "promise-mysql";
import dotenv from "dotenv";
dotenv.config();
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
try {
  const conn = await mysql.createConnection(config);
  console.log("Conexión a la base de datos exitosa");
  await conn.end();
} catch (error) {
  console.error("Error al conectar a la base de datos:", error);
}
export const conn = await mysql.createConnection(config);
