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
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    id_restaurant: {
      type: DataTypes.INTEGER,
    },
    tiempo_preparacion: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
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
