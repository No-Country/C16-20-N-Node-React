import Conexion from "../controllers/conexion.js";
import Cliente from "../models/cliente.js";
import Repartidor from "../models/repartidor.js";
import Pagos from "../models/pagos.js";
import Status from "../models/status.js";
import { DataTypes, Model } from "sequelize";
import Producto from "./productos.js";
import Restaurante from "./restaurante.js";

class Pedidos extends Model {}

Pedidos.init(
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_repartidor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_hora: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_status: {
      type: DataTypes.INTEGER,
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

Pagos.hasMany(Pedidos, { foreignKey: "id_pago" });
Pedidos.belongsTo(Pagos, { foreignKey: "id_pago" });

Producto.hasMany(Pedidos, { foreignKey: "id_producto" });
Pedidos.belongsTo(Producto, { foreignKey: "id_producto" });

Status.hasMany(Pedidos, { foreignKey: "id_status" });
Pedidos.belongsTo(Status, { foreignKey: "id_status" });

Restaurante.hasOne(Pedidos, { foreignKey: "id_restaurant" });
Pedidos.belongsTo(Restaurante, { foreignKey: "id_restaurant" });
export default Pedidos;