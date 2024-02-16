import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";

class Repartidor extends Model {}
Repartidor.init(
  {
    id_repartidor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_repartidor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_repartidor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail_repartidor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono_repartidor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rol_usuario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "repartidor",
    tableName: "repartidores",
    timestamps: false,
  }
);

export default Repartidor;
