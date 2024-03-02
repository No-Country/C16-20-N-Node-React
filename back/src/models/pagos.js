import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";

class Pagos extends Model {}

Pagos.init(
    {
        id_pago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        tipo_pago: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
    {
        sequelize: Conexion.sequelize,
        modelName: "pagos",
        tableName: "pagos",
        timestamps: false,
    }
);

export default Pagos;
