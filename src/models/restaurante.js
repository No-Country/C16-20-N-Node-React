import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";

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
    mail_restaurant: {
      type: DataTypes.STRING,
    },
    telefono_restaurant: {
      type: DataTypes.STRING,
    },
    rubro_restaurant: {
      type: DataTypes.STRING,
    },
    rol_usuario: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "restaurante",
    tableName: "restaurantes",
    timestamps: false,
  }
);

export default Restaurante;
