import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";
import Usuario from "./usuario.js";
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
    telefono_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "cliente",
    tableName: "clientes",
    timestamps: false,
  }
);

Usuario.hasOne(Cliente, { foreignKey: "id_usuario" });
Cliente.belongsTo(Usuario, { foreignKey: "id_usuario" });

export default Cliente;
