import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";
import Usuario from "./usuario.js";
class Restaurante extends Model {}

Restaurante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_restaurant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion_restaurant: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono_restaurant: {
      type: DataTypes.STRING,
    },
    rubro_restaurant: {
      type: DataTypes.STRING,
    },
    id_usuario: {
      // enlace con la tabla de usuario
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // status: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "restaurante",
    tableName: "restaurantes",
    timestamps: false,
  }
);

// Relación entre Usuario y Restaurante
Usuario.hasOne(Restaurante, { foreignKey: "id_usuario" });
Restaurante.belongsTo(Usuario, { foreignKey: "id_usuario" });

// Sincronización de los modelos con la base de datos
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Modelos sincronizados con la base de datos.");
//   })
//   .catch((error) => {
//     console.error("Error al sincronizar los modelos:", error);
//   });

export default Restaurante;
