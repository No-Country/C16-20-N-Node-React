/*
 * referencias:
 * ✔️ - Finalizado
 * ⏳ - En proceso
 * ❌ - No realizado
 * ⚡ - urgente
 */
import mysql from "promise-mysql";
import dotenv from "dotenv";
dotenv.config();
// ✔️ - Finalizado
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
let conexion;
// ✔️ - Finalizado
async function conectarBD() {
  try {
    conexion = await mysql.createConnection(config);
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}
// ✔️ - Finalizado
async function cerrarConexion() {
  try {
    if (conexion) {
      await conexion.end();
      console.log("Conexión cerrada correctamente");
    } else {
      console.warn("No hay conexión establecida para cerrar");
    }
  } catch (error) {
    console.error("Error al cerrar la conexión:", error);
  }
}
// ✔️ - Finalizado
export async function ejecutarQuery(query) {
  try {
    if (!conexion) {
      throw new Error("No hay conexión establecida");
    }
    const results = await conexion.query(query);
    return results;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    throw error;
  }
}

conectarBD();
export { cerrarConexion };
