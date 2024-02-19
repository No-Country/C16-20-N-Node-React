import Conexion from "../controllers/conexion.js";
import Restaurante from "../models/restaurante.js";
import { DataTypes, Model } from "sequelize";

class Producto extends Model {}
Producto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_producto: {
      type: DataTypes.STRING,
    },
    descripcion_producto: {
      type: DataTypes.STRING,
    },
    precio_producto: {
      type: DataTypes.INTEGER,
    },
    id_restaurante: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "productos",
    tableName: "productos",
    timestamps: false,
  }
);

Producto.hasMany(Restaurante, { foreignKey: "id_restaurante" });
Restaurante.belongsTo(Producto, { foreignKey: "id_restaurante" });

export default Producto;
