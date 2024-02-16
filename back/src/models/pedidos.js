import Conexion from "../controllers/conexion.js";
import Cliente from "../models/cliente.js";
import Repartidor from "../models/repartidor.js";
import Restaurante from "../models/restaurante.js";
import { DataType, Model } from "sequelize";
import Producto from "./productos.js";

class Pedidos extends Model {}

Pedidos.init(
  {
    id_pedidos: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    id_restaurant: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    id_repartidor: {
      type: DataType.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "pedidos",
    tableName: "pedidos",
    timestamps: false,
  }
);
Cliente.hasMany(Pedidos, { foreignKey: "id_cliente" });
Pedidos.belongsTo(Cliente, { foreignKey: "id_cliente" });

Repartidor.hasMany(Pedidos, { foreignKey: "id_repartidor" });
Pedidos.belongsTo(Repartidor, { foreignKey: "id_repartidor" });

Restaurante.hasMany(Pedidos, { foreignKey: "id_restaurant" });
Pedidos.belongsTo(Restaurante, { foreignKey: "id_restaurant" });

Producto.hasMany(Pedidos, { foreignKey: "id_producto" });
Pedidos.belongsTo(Producto, { foreignKey: "id_producto" });

export default Pedidos;
