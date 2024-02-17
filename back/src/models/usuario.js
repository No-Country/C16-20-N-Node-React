import Conexion from "../controllers/conexion.js";
import { DataTypes, Model } from "sequelize";
class Usuario extends Model {}
Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rol_usuario: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize: Conexion.sequelize,
        modelName: "usuario",
        tableName: "usuarios",
        timestamps: false,
    }
);

export default Usuario;