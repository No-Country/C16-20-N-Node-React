import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";
class Cliente extends Model {}
Cliente.init(
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion_cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail_cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono_cliente: {
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
    modelName: "cliente",
    tableName: "clientes",
    timestamps: false,
  }
);

export default Cliente;
