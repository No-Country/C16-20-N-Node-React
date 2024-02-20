import productos from '../../assets/products.json';

const ManageProducts = () => {
    return (
        <div className='flex w-full ml-[40px] mt-[40px] min-w-[770px]'>
            <div className='font-[roboto] text-[16px]'>
                {productos.map((producto, index) => (
                    <tr key={index}>
                        <td className=' px-5 py-3'>{producto.nombre}</td>
                        <td className=' px-8 py-3'>{producto.descripcion}</td>
                        <td className=' px-8 py-3'>{producto.precio}</td>
                        <td className=' px-8 py-3'>{producto.tiempo}</td>
                    </tr>
                ))}
            </div>
        </div>
    );
}

export default ManageProducts;
