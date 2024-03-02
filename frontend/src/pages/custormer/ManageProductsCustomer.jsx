import { useState, useEffect } from 'react';
import NavigationBarCustomer from '../../layouts/NavigationBarCustomer';

const ManageProductsCustomer = () => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

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
        setCarrito([...carrito, producto]);
    };

    const handleAlmacenarPedido = () => {
        localStorage.setItem('PedidoData', JSON.stringify(carrito));
        setCarrito([]);
        setMostrarModal(false);
    };

    return (
        <div className="container mx-auto px-4 min-w-[300px]">
            <NavigationBarCustomer
                onCarritoIconClick={() => setMostrarModal(true)}
                cantidadCarrito={carrito.length}
            />
            <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-8 md:mt-8 lg:mt-8">
                {productos.length > 0 ? (
                    productos.map((producto, index) => (
                        <div key={index} className="bg-white rounded-[30px] shadow-md min-w-[200px] border border-[#FF5733] p-[15px] flex flex-col">
                            <img
                                src={producto.imagen}
                                alt="imagen"
                                className="w-full h-[200px] w-[200px] shadow-md object-cover rounded-lg"
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
            {mostrarModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Carrito de Compra</h2>
                        {carrito.map((producto, index) => (
                            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
                                <p>{producto.nombre}</p>
                                <p>${producto.precio}</p>
                            </div>
                        ))}
                        <button
                            onClick={handleAlmacenarPedido}
                            className="bg-[#00A896] text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Almacenar Pedido
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ManageProductsCustomer;
