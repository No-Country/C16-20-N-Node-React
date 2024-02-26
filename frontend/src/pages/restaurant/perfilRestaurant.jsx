import image13 from '../../assets/image13.jpeg';
import image14 from '../../assets/image14.svg';
import icon37 from '../../assets/icon37.svg';
import productos from '../../api/products/products.json';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PerfilRestaurant = () => {
    const [redirect, setRedirect] = useState(null);

    const handleRedirect = () => {
        setRedirect('/loadProduct');
    };

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
                    <div className='w-[297px]'>

                    </div>
                </div>
                {/* seccion derecha */}
                <div className='flex flex-col items-center justify-center w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <p className='mb-[22px] text-[24px]'>Administra tu carta</p>
                    <button
                        onClick={handleRedirect}
                        className='font-[roboto] bg-[#00A896] border-[1px] border-[#575757] rounded-[20px] h-[70px] w-[224px] text-[36px]'>
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
