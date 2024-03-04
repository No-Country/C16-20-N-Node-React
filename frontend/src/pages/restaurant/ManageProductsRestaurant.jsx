import { useState, useEffect } from 'react';
import icon5 from '../../assets/icons/icon5.svg';
import SideBar from '../../layouts/SideBar';
import TopBar from '../../layouts/TopBar';

const ManageProductsRestaurant = () => {
    const [products, setProducts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});
    const [userCurrent, setUserCurrent] = useState({});

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('ProductsData')) || [];
        const storedUserCurrent = JSON.parse(localStorage.getItem('UserCurrent')) || {};

        const filteredProducts = storedProducts.filter(product => product.mail === storedUserCurrent.mail);
        setProducts(filteredProducts);
        setUserCurrent(storedUserCurrent);
    }, []);

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedProduct(products[index]);
    };

    const handleSave = () => {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = editedProduct;
        setProducts(updatedProducts);
        localStorage.setItem('ProductsData', JSON.stringify(updatedProducts));
        setEditIndex(null);
    };

    const handleCancel = () => {
        setEditIndex(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    return (
        <>
            <TopBar />
            <div className='flex min-h-screen w-full bg-white'>
                <SideBar />
                <div className='mt-8 ml-8' >
                    <table className='text-[16px] font-medium'>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((producto, index) => (
                                    <tr key={index}>
                                        <td className='pb-[28px] w-[235px]'>
                                            {editIndex === index ? (
                                                <input
                                                    type='text'
                                                    name='nombre'
                                                    value={editedProduct.nombre}
                                                    onChange={handleChange}
                                                />
                                            ) : (
                                                producto.nombre
                                            )}
                                        </td>
                                        <td className='pb-[28px] w-[235px]'>
                                            {editIndex === index ? (
                                                <input
                                                    type='text'
                                                    name='descripcion'
                                                    value={editedProduct.descripcion}
                                                    onChange={handleChange}
                                                />
                                            ) : (
                                                producto.descripcion
                                            )}
                                        </td>
                                        <td className='pb-[28px] w-[122px]'>
                                            {editIndex === index ? (
                                                <input
                                                    type='text'
                                                    name='precio'
                                                    value={editedProduct.precio}
                                                    onChange={handleChange}
                                                />
                                            ) : (
                                                producto.precio
                                            )}
                                        </td>
                                        <td className='pb-[28px] w-[154px]'>
                                            {editIndex === index ? (
                                                <input
                                                    type='text'
                                                    name='tiempo'
                                                    value={editedProduct.tiempo}
                                                    onChange={handleChange}
                                                />
                                            ) : (
                                                producto.tiempo
                                            )}
                                        </td>
                                        <td className='pb-[28px] w-[120px]'>
                                            {editIndex === index ? (
                                                <input
                                                    type='text'
                                                    name='imagen'
                                                    value={editedProduct.imagen}
                                                    onChange={handleChange}
                                                />
                                            ) : (
                                                <img
                                                    src={producto.imagen}
                                                    alt={producto.nombre}
                                                    className='h-8 w-16 object-cover'
                                                />
                                            )}
                                        </td>
                                        <td className='pb-[28px]'>
                                            {editIndex === index ? (
                                                <>
                                                    <button onClick={handleSave}>ACEPTAR</button>
                                                    <button onClick={handleCancel}>CANCELAR</button>
                                                </>
                                            ) : (
                                                <img
                                                    src={icon5}
                                                    alt='icon5'
                                                    onClick={() => handleEdit(index)}
                                                    className='cursor-pointer w-[26px] h-[26px] object-cover self-end mr-[27px]'
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No hay productos disponibles.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageProductsRestaurant;
