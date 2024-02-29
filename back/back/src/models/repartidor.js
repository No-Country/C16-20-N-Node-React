import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";
import Usuario from "./usuario.js";

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
    telefono_repartidor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // status: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
  },
  {
    sequelize: Conexion.sequelize,
    modelName: "repartidor",
    tableName: "repartidores",
    timestamps: false,
  }
);

Usuario.hasOne(Repartidor, { foreignKey: "id_usuario" });
Repartidor.belongsTo(Usuario, { foreignKey: "id_usuario" });

export default Repartidor;
