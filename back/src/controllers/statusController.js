import Status from "../models/status.js";
import Conexion from "./conexion.js";

//✔️ - Finalizado
const listarStatus = async () => {
    try {
        const status = await Status.findAll({});
        return status;
    } catch (error) {
        console.log("error al listar los status", error);
        throw error;
    }
};

//✔️ - Finalizado
const listarStatusPorId = async (id) => {
    try {
        const statusId = await Status.findByPk(id, {});
        if (!statusId) {
            throw new Error(`No hay registros de status con el Id ${id}`);
        }
        return statusId;
    } catch (error) {
        throw error;
    }
};

// const crearStatus = async (idStatus, tipoStatus) => {
//     let t = await Conexion.sequelize.transaction();
//     try {
//         const nuevoStatus = await Status.create(
//             { id_status: idStatus,
//             tipo_status: tipoStatus},
//             { transaction: t }
//         );
//         await t.commit();
//         return nuevoStatus;
//     } catch (error) {
//         throw error;
//     }
// };

export { listarStatus, listarStatusPorId };
