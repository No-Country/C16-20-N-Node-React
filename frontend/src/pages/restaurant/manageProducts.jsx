import productos from '../../assets/products.json';
import image12 from '../../assets/image12.svg'
import icon37 from '../../assets/icon37.svg'

const ManageProducts = () => {
    return (
        <div className='flex w-full h-fit ml-[63px] mt-[74px] min-w-[1400px]'>
            <table className='font-[roboto] text-[16px]'>
                <tbody className=''>
                    {productos.map((producto, index) => (
                        <tr
                            key={index}
                            className=''>
                            <td className=' px-5 pb-[30px]'>{producto.nombre}</td>
                            <td className=' px-8 pb-[30px]'>{producto.descripcion}</td>
                            <td className=' px-8 pb-[30px]'>{producto.precio}</td>
                            <td className=' px-8 pb-[30px]'>{producto.tiempo}</td>
                            <td className='px-10 pb-[30px]'>
                                <img
                                    src={image12}
                                    alt='image12'
                                    className='
                                h-[29px] w-[59px] object-cover
                                '
                                >
                                </img>
                            </td>
                            <td className='px-5 pb-[30px]'>
                                <img
                                    src={icon37}
                                    alt='image12'
                                    className='
                                h-[29px] w-[59px]
                                '
                                >
                                </img>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageProducts;
