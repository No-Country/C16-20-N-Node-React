import icon5 from '../../assets/icons/icon5.svg';

const ManageProducts = () => {

    {/* json productos para mostrar*/ }
    const products = [
        {
            "mail": "restaurante@example.com",
            "nombre": "Risotto de Champiñones",
            "descripcion": "Delicioso risotto hecho con...",
            "precio": "$12 USD",
            "tiempo": "20 - 25 mins",
            "imagen": "https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg"
        },
        {
            "mail": "restaurante@example.com",
            "nombre": "Ensalada de Quinoa y...",
            "descripcion": "Fresca y colorida ensalada...",
            "precio": "$8 USD",
            "tiempo": "15 - 20 mins",
            "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYWLvD94Ycd2sS805v7R1r7fjejnrDxysTqHCsgd3WA&s"
        },
        {
            "mail": "restaurante@example.com",
            "nombre": "Tacos de Camarones al...",
            "descripcion": "Tacos de tortilla de maiz...",
            "precio": "$10 USD",
            "tiempo": "15 - 20 mins",
            "imagen": "https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/2022-09/plato-unico.jpg.webp?itok=0ZB-bG3S"
        }
    ]

    return (
        <div className='flex flex-col min-h-screen w-full bg-white my-[70px] mx-[63px]'>
            <table className='text-[16px] font-medium'>
                <tbody>
                    {products.map((producto, index) => (
                        <tr key={index}>
                            <td className='pb-[28px] w-[235px]'>{producto.nombre}</td>
                            <td className='pb-[28px] w-[235px]'>{producto.descripcion}</td>
                            <td className='pb-[28px] w-[122px]'>{producto.precio}</td>
                            <td className='pb-[28px] w-[154px]'>{producto.tiempo}</td>
                            <td className='pb-[28px] w-[120px]'>
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className='h-8 w-16 object-cover' />
                            </td>
                            <td className='pb-[28px]'>
                                <img src={icon5} alt='icon5' className='h-[26px] w-[26px] object-cover' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageProducts;
