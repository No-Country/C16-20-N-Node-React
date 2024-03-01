import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import icon5 from '../../assets/icons/icon5.svg';
import logo2 from '../../assets/logos/logo2.svg';

const ManagePerfil = () => {
    const [redirect, setRedirect] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = sessionStorage.getItem('formData');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleRedirectToLoadProduct = () => {
        setRedirect('/productUploadForm');
    };

    const handleRedirectToRegister = () => {
        setRedirect('/profileUpdateForm');
    };

    const profile = {
        "mail": "restaurante@example.com",
        "category": "Cocina de autor",
        "address": "456 Avenida Principal, Ciudad Ilusión",
        "name": "Restaurante Estrella",
        "phone": "555-987-6543",
        "logo": logo2
    }

    return (
        <div className='flex flex-col min-h-screen bg-white my-[47px] px-[64px]'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex justify-between w-[959px] h-[200px]'>
                {/* Sección izquierda */}
                <div className='flex items-center justify-end w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <div className='flex mb-[25px] mr-[16px]'>
                        <img
                            src={profile.logo}
                            alt='logo2'
                            className='w-[105px] h-[109px] object-cover rounded-[10px]'
                        />
                    </div>
                    <div className='flex flex-col justify-between w-[297px] h-[140px]'>
                        <p className='text-[24px] font-medium'>{profile.name}</p>
                        <p className='text-[16px]'>{profile.address}</p>
                        <p className='text-[16px]'>{profile.phone}</p>
                        <img
                            src={icon5}
                            alt='icon5'
                            onClick={handleRedirectToRegister}
                            className='cursor-pointer w-[26px] h-[26px] object-cover self-end mr-[27px]'
                        />
                    </div>
                </div>
                {/* Sección derecha */}
                <div className='flex flex-col items-center justify-center w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <p className='mb-[22px] text-[24px]'>Administra tu carta</p>
                    <button
                        onClick={handleRedirectToLoadProduct}
                        className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[70px] w-[224px] text-[36px]'>
                        Entrar
                    </button>
                </div>
            </div>
            {/* Sección inferior */}
            <div className='flex flex-wrap justify-between mt-[36px] w-[960px]'>
                {products.length > 0 ? (
                    products.map((producto, index) => (
                        <img
                            key={index}
                            src={producto.imagen}
                            alt={producto.nombre}
                            className={`w-[256px] h-[120px] object-cover rounded-[15px] mb-[56px]`}
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    )
}

export default ManagePerfil;
