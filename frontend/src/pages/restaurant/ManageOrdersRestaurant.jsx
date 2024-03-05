import { useState, useEffect } from 'react';
import SideBar from "../../layouts/SideBar";
import TopBar from "../../layouts/TopBar";

const ManageOrdersRestaurant = () => {
    const [orders, setOrders] = useState([]);
    const [userCurrent, setUserCurrent] = useState({});

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('PedidoData')) || [];
        const storedUserCurrent = JSON.parse(localStorage.getItem('UserCurrent')) || {};

        const filteredOrders = storedOrders.filter(order => order.mail === storedUserCurrent.mail);
        setOrders(filteredOrders);
        setUserCurrent(storedUserCurrent);
    }, []);

    return (
        <>
            <TopBar />
            <div className='flex min-h-screen w-full bg-white'>
                <SideBar />
                <div className='mt-8 ml-8'>
                    <table className='text-[16px] font-medium w-full'>
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Descripción</th>
                                <th className="p-2">Precio</th>
                                <th className="p-2">Tiempo</th>
                                <th className="p-2">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                    <td className="p-2">{order.nombre}</td>
                                    <td className="p-2">{order.descripcion}</td>
                                    <td className="p-2">{order.precio}</td>
                                    <td className="p-2">{order.tiempo}</td>
                                    <td className="p-2">
                                        <img src={order.imagen} alt={order.nombre} className='h-8 w-16 object-cover' />
                                    </td>
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
