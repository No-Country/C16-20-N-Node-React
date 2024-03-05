import { useState, useEffect } from 'react';
import SideBar from '../../layouts/SideBar';
import TopBar from '../../layouts/TopBar';
import icon5 from '../../assets/icons/icon5.svg';

const ManageProductsRestaurant = () => {
    const [products, setProducts] = useState([]);
    const [userCurrent, setUserCurrent] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('ProductsData')) || [];
        const storedUserCurrent = JSON.parse(localStorage.getItem('UserCurrent')) || {};

        const filteredProducts = storedProducts.filter(product => product.mail === storedUserCurrent.mail);
        setProducts(filteredProducts);
        setUserCurrent(storedUserCurrent);
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
        // Actualizar el producto seleccionado con los nuevos valores
        const updatedProduct = {
            ...selectedProduct,
            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            precio: document.getElementById('precio').value,
            tiempo: document.getElementById('tiempo').value,
            imagen: selectedImage || selectedProduct.imagen, // Usar la nueva imagen si se seleccionó, de lo contrario, conservar la imagen existente
        };

        // Actualizar el array de productos en localStorage
        const updatedProducts = products.map(product => (product.id === updatedProduct.id ? updatedProduct : product));
        localStorage.setItem('ProductsData', JSON.stringify(updatedProducts));

        // Actualizar el estado de los productos en el componente
        setProducts(updatedProducts);
        closeModal();
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
                <div className='flex flex-col flex-1 pt-6 px-6 md:mx-[1vw]' style={{ maxWidth: 'max-content' }}>
                    {products.length > 0 ? (
                        products.map((producto, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-6 gap-4 border border-gray-300 rounded-lg p-4 mt-4 shadow-md">
                                {/* Mostrar los campos con sus valores y títulos */}
                                <div className="col-span-1 sm:col-span-1">
                                    <p className="font-semibold">Nombre:</p>
                                    <p>{producto.nombre}</p>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <p className="font-semibold">Descripción:</p>
                                    <p>{producto.descripcion}</p>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <p className="font-semibold">Precio:</p>
                                    <p>{producto.precio}</p>
                                </div>
                                <div className="col-span-1 sm:col-span-1">
                                    <p className="font-semibold">Tiempo:</p>
                                    <p>{producto.tiempo}</p>
                                </div>
                                <div className="col-span-1 sm:col-span-1 flex items-center justify-center">
                                    <img src={producto.imagen} alt={producto.nombre} className="h-auto md:max-w-32 w-full object-cover" />
                                </div>
                                <div className="col-span-1 sm:col-span-1 flex items-center justify-end sm:justify-center">
                                    <img
                                        src={icon5}
                                        alt={producto.nombre}
                                        className='cursor-pointer w-8 h-8'
                                        onClick={() => handleEditProduct(producto)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-4">No hay productos disponibles.</p>
                    )}
                </div>
            </div>
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
                                                    <input type="text" id="tiempo" name="tiempo" defaultValue={selectedProduct.tiempo} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
