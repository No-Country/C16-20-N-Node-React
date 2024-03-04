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
                    <table className='text-[16px] font-medium'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Tiempo</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.nombre}</td>
                                    <td>{order.descripcion}</td>
                                    <td>{order.precio}</td>
                                    <td>{order.tiempo}</td>
                                    <td>{order.fechaHora}</td>
                                    <td>
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
