import { useState, useEffect } from 'react';
import SideBar from "../../layouts/SideBar";
import TopBar from "../../layouts/TopBar";

const ManageOrdersRestaurant = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('https://vaya-pronto.onrender.com/pedido/restaurante/8');
                if (!response.ok) {
                    throw new Error('Error al obtener los pedidos');
                }
                const data = await response.json();
                setOrders(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <>
            <TopBar />
            <div className='flex min-h-screen w-full bg-white'>
                <SideBar />
                <div className='relative w-full overflow-x-auto'>
                    <table className="border-collapse w-full">
                        <thead>
                            <tr className='bg-[#FF7C58]'>
                                <th className="px-4 pl-12 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">ID de Producto</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Pago</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Status</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Fecha y Hora</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id_pedido}>
                                    <td className="px-4 pl-12 py-3 text-left" style={{ minWidth: '120px' }}>{order.id_producto}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{order.pago.tipo_pago}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{order.status.tipo_estatus}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{order.fecha_hora}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{order.cliente.direccion_cliente}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageOrdersRestaurant;
