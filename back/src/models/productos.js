import Conexion from "../controllers/conexion.js";
import Restaurante from "../models/restaurante.js";
import { DataTypes, Model } from "sequelize";

class Producto extends Model {}
Producto.init(
  {
    id_producto: {
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
    tiempo_preparacion: {
      type: DataTypes.STRING,
    },

    id_restaurant: {
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

Restaurante.hasOne(Producto, { foreignKey: "id_restaurant" });
Producto.belongsTo(Restaurante, { foreignKey: "id_restaurant" });

export default Producto;
