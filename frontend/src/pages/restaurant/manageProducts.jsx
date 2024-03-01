import { useState, useEffect } from 'react';
import icon5 from '../../assets/icons/icon5.svg';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = sessionStorage.getItem('formData');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    return (
        <div className='flex flex-col min-h-screen w-full bg-white my-[70px] mx-[63px]'>
            <table className='text-[16px] font-medium'>
                <tbody>
                    {products.length > 0 ? (
                        products.map((producto, index) => (
                            <tr key={index}>
                                <td className='pb-[28px] w-[235px]'>{producto.nombre}</td>
                                <td className='pb-[28px] w-[235px]'>{producto.descripcion}</td>
                                <td className='pb-[28px] w-[122px]'>{producto.precio}</td>
                                <td className='pb-[28px] w-[154px]'>{producto.tiempo}</td>
                                <td className='pb-[28px] w-[120px]'>
                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        className='h-8 w-16 object-cover'
                                    />
                                </td>
                                <td className='pb-[28px]'>
                                    <img src={icon5} alt='icon5' className='h-[26px] w-[26px] object-cover' />
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
    );
}

export default ManageProducts;
