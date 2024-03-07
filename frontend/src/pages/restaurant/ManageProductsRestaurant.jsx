import React, { useState, useEffect } from 'react';
import SideBar from '../../layouts/SideBar';
import TopBar from '../../layouts/TopBar';
import icon5 from '../../assets/icons/icon5.svg';

const ManageProductsRestaurant = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const storedUserCurrent = JSON.parse(localStorage.getItem('UserCurrent')) || {};

        const fetchData = async () => {
            try {
                const response = await fetch('https://vaya-pronto.onrender.com/producto/restaurant/' + storedUserCurrent.usuario.id);
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setErrorMessage(error.message);
            }
        };
        fetchData();
    }, []);

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
    };

    const handleSubmit = () => {
        // Aquí puedes implementar la lógica para guardar los cambios del producto
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        setSelectedImage(null);
    };

    return (
        <>
            <TopBar />
            <div className='flex min-h-screen w-full bg-white'>
                <SideBar />
                <div className='relative w-full overflow-x-auto'>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <table className="border-collapse w-full">
                        <thead>
                            <tr className='bg-[#FF7C58]'>
                                <th className="px-4 pl-12 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Nombre</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Descripción</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Precio</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Tiempo</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Imagen</th>
                                <th className="px-4 mb-6 pb-3 text-left max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">Editar</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td className="px-4 pl-12 py-3 text-left" style={{ minWidth: '120px' }}>{product.nombre}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{product.descripcion}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{product.precio}</td>
                                    <td className="px-4 py-3 text-left" style={{ minWidth: '120px' }}>{product.tiempo_preparacion}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={`https://vaya-pronto.onrender.com/${product.imagen}`} alt={product.nombre} className="h-auto md:max-w-32 w-full object-cover" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <img
                                            src={icon5}
                                            alt='lapiz'
                                            className='cursor-pointer w-12 h-12'
                                            onClick={() => handleEditProduct(product)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal de edición de producto */}
            {isModalOpen && selectedProduct && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                                            Editar Producto
                                        </h3>
                                        <div className="mt-2">
                                            <form>
                                                <div className="mb-4">
                                                    <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                                                    <input type="text" id="nombre" name="nombre" defaultValue={selectedProduct.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="descripcion" className="block text-gray-700 font-bold mb-2">Descripción:</label>
                                                    <input type="text" id="descripcion" name="descripcion" defaultValue={selectedProduct.descripcion} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="precio" className="block text-gray-700 font-bold mb-2">Precio:</label>
                                                    <input type="text" id="precio" name="precio" defaultValue={selectedProduct.precio} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="tiempo" className="block text-gray-700 font-bold mb-2">Tiempo:</label>
                                                    <input type="text" id="tiempo" name="tiempo" defaultValue={selectedProduct.tiempo_preparacion} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="imagen" className="block text-gray-700 font-bold mb-2">Imagen:</label>
                                                    <input type="file" id="imagen" name="imagen" accept="image/*" onChange={handleImageUpload} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                                {selectedImage && (
                                                    <img src={selectedImage} alt="Selected" className="h-auto max-w-32 w-full object-cover" />
                                                )}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" onClick={handleSubmit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Guardar Cambios
                                </button>
                                <button type="button" onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ManageProductsRestaurant;