import Pagos from "../models/pagos.js";
import Conexion from "./conexion.js";

//✔️ - Finalizado
const listarPagos = async () => {
    try {
        const pagos = await Pagos.findAll({});
        return pagos;
    } catch (error) {
        console.log("error al listar los tipos de pago", error);
        throw error;
    }
};

//✔️ - Finalizado
const listarPagosPorId = async (id) => {
    try {
        const pagoId = await Pagos.findByPk(id, {});
        if (!pagoId) {
            throw new Error(`No hay registros de pagos con el Id ${id}`);
        }
        return pagoId;
    } catch (error) {
        throw error;
    }
};

const crearPago = async (idPago, tipoPago) => {
    let t = await Conexion.sequelize.transaction();
    try {
        const nuevoPago = await Pagos.create(
            { id_pago: idPago,
            tipo_pago: tipoPago},
            { transaction: t }
        );
        await t.commit();
        return nuevoPago;
    } catch (error) {
        throw error;
    }
};

export { listarPagos, listarPagosPorId };
