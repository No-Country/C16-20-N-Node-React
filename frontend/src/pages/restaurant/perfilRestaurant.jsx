import image14 from '../../assets/image14.svg';
import icon37 from '../../assets/icon37.svg';
import productos from '../../api/products/products.json';
import perfil from '../../api/profile.json';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PerfilRestaurant = () => {
    const [redirect, setRedirect] = useState(null);

    const handleRedirect = () => {
        setRedirect('/loadProduct');
    };

    const restauranteInfo = perfil.usersInfo.find(user => user.mail === 'restaurante@example.com');

    return (
        <div className='flex flex-col min-h-screen bg-white my-[47px] px-[64px]'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex justify-between w-[959px] h-[200px]'>
                {/* seccion izquierda */}
                <div className='flex items-center justify-end w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <div className='flex flex-col items-end mr-[16px]'>
                        <img
                            src={image14}
                            alt='Image14'
                            className='w-[105px] h-[109px] object-cover rounded-[10px]'
                        />
                        <img
                            src={icon37}
                            alt='icon37'
                            className='w-[26px] h-[26px] object-cover'
                        />
                    </div>
                    <div className='flex flex-col justify-between w-[297px] h-[140px]'>
                        <p className='text-[24px] font-medium'>{restauranteInfo.name}</p>
                        <p className='text-[16px]'>{restauranteInfo.address}</p>
                        <p className='text-[16px]'>{restauranteInfo.telephone}</p>
                        <img
                            src={icon37}
                            alt='icon37'
                            className='w-[26px] h-[26px] object-cover self-end mr-[27px]'
                        />
                    </div>
                </div>
                {/* seccion derecha */}
                <div className='flex flex-col items-center justify-center w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <p className='mb-[22px] text-[24px]'>Administra tu carta</p>
                    <button
                        onClick={handleRedirect}
                        className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[70px] w-[224px] text-[36px]'>
                        Entrar
                    </button>
                </div>
            </div>
            {/* Galería de imágenes */}
            <div className='flex flex-wrap justify-between mt-[36px] w-[960px]'>
                {productos.map((producto, index) => (
                    <img
                        key={index}
                        src={`src/api/products/${producto.imagen}`}
                        alt={producto.nombre}
                        className={`w-[256px] h-[120px] object-cover rounded-[15px] mb-[56px]`}
                    />
                ))}
            </div>
        </div>
    )
}

export default PerfilRestaurant;
