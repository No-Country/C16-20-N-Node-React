import productos from '../../api/products/products.json';
import icon37 from '../../assets/icon37.svg';

const ManageProducts = () => {
    return (
        <div className='flex flex-col min-h-screen min-w-full bg-white mt-[70px] pl-[63px]'>
            <table className='text-[16px] font-medium'>
                {productos.map((producto, index) => (
                    <tr key={index}>
                        <td className='pb-[28px] w-[235px]'>{producto.nombre}</td>
                        <td className='pb-[28px] w-[235px]'>{producto.descripcion}</td>
                        <td className='pb-[28px] w-[122px]'>{producto.precio}</td>
                        <td className='pb-[28px] w-[154px]'>{producto.tiempo}</td>
                        <td className='pb-[28px] w-[120px]'>
                            <img
                                src={`src/api/products/${producto.imagen}`}
                                alt={producto.nombre}
                                className='h-8 w-16 object-cover' />
                        </td>
                        <td className='pb-[28px]'>
                            <img src={icon37} alt='icon37' className='h-[26px] w-[26px] object-cover' />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default ManageProducts;
