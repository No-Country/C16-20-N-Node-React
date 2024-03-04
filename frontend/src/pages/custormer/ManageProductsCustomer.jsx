import { useState, useEffect } from 'react';
import TopBar from '../../layouts/TopBar';
import SideBar from '../../layouts/SideBar';

const ManageProductsCustomer = () => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const handleStorageChange = () => {
            const productosGuardados = JSON.parse(localStorage.getItem('ProductsData')) || [];
            setProductos(productosGuardados);
        };

        window.addEventListener('storage', handleStorageChange);

        const productosGuardados = JSON.parse(localStorage.getItem('ProductsData')) || [];
        setProductos(productosGuardados);

        const carritoGuardado = JSON.parse(localStorage.getItem('PedidoData')) || [];
        setCarrito(carritoGuardado);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const agregarAlCarrito = (producto) => {
        const nuevoProducto = {
            ...producto,
            id: generarNuevoId(),
            fechaHora: obtenerFechaHoraActual()
        };

        setCarrito([...carrito, nuevoProducto]);
        localStorage.setItem('PedidoData', JSON.stringify([...carrito, nuevoProducto]));
    };

    const generarNuevoId = () => {
        const ids = carrito.map(producto => producto.id);
        const ultimoId = Math.max(...ids, 0);
        return ultimoId + 1;
    };

    const obtenerFechaHoraActual = () => {
        const fechaHora = new Date();
        return fechaHora.toISOString(); // Formato ISO: YYYY-MM-DDTHH:MM:SSZ
    };

    return (
        <>
            <TopBar />
            <div className="mx-auto min-w-[350px] h-screen flex">
                <SideBar />
                <div className="flex flex-wrap justify-center gap-4 mt-4 ml-8 sm:mt-8 md:mt-8 lg:mt-8">
                    {productos.length > 0 ? (
                        productos.map((producto, index) => (
                            <div key={index} className="bg-white rounded-[30px] h-min shadow-md min-w-[200px] border border-[#FF5733] p-[15px] flex flex-col">
                                <img
                                    src={producto.imagen}
                                    alt="imagen"
                                    className="w-full h-[200px] w-[200px] max-w-[200px] shadow-md object-cover rounded-lg"
                                />
                                <h3 className="text-lg font-semibold m-2">{producto.nombre}</h3>
                                <div className="flex w-full justify-between px-2">
                                    <div className="flex flex-col">
                                        <p className="text-gray-700">Precio:</p>
                                        <p className="text-gray-900 font-bold">${producto.precio}</p>
                                    </div>
                                    <button
                                        onClick={() => agregarAlCarrito(producto)}
                                        className="bg-[#00A896] text-black border shadow-xl border-black px-6 py-2 rounded-[30px] hover:bg-blue-600 transition duration-200 text-base md:text-lg "
                                    >
                                        Pedir
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ManageProductsCustomer;
