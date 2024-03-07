import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";

class Status extends Model {}

Status.init(
  {
    id_status: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_estatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "status",
    tableName: "status",
    timestamps: false,
  }
);

export default Status;
