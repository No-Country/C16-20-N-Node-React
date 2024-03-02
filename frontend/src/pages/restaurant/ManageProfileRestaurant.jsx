import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import icon5 from '../../assets/icons/icon5.svg';
import NavigationBarRestaurant from '../../layouts/NavigationBarRestaurant';

const ManageProfileRestaurant = () => {
    const [redirect, setRedirect] = useState(null);
    const [productsData, setProductsData] = useState([]);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('users');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setProfile(userData.restaurantData);
        }

        const storedProducts = localStorage.getItem('ProductsData');
        if (storedProducts) {
            setProductsData(JSON.parse(storedProducts));
        }
    }, []);

    const handleRedirectToLoadProduct = () => {
        setRedirect('/restaurante/cargar-producto');
    };

    const handleRedirectToRegister = () => {
        setRedirect('/profileUpdateForm');
    };

    return (
        <div className="container mx-auto px-4">
            <NavigationBarRestaurant />
            {redirect && <Navigate to={redirect} />}
            <div className='flex flex-col md:flex-row md:justify-between my-[4vw] '>
                {/* Sección izquierda */}
                <div className='flex flex-col justify-between w-full md:w-[45%] border border-[#575757] rounded-[20px]'>
                    <div className='flex justify-center md:justify-end'>
                        <div className='rounded-lg overflow-hidden bg-white shadow-md'>
                            <img
                                src={profile?.logo}
                                alt=''
                                className='w-full h-auto object-cover'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-start md:ml-[4vw] p-[2vw]'>
                        <div className='rounded-lg overflow-hidden bg-white shadow-md mb-[2vw]'>
                            <p className='text-[4vw] font-medium'>{profile?.name}</p>
                            <p className='text-[2vw]'>{profile?.address}</p>
                            <p className='text-[2vw]'>{profile?.phone}</p>
                        </div>
                        <img
                            src={icon5}
                            alt='icon5'
                            onClick={handleRedirectToRegister}
                            className='cursor-pointer w-[2vw] h-[2vw] object-cover self-end mr-[4vw]'
                        />
                    </div>
                </div>
                {/* Sección derecha */}
                <div className='flex flex-col items-center justify-center w-full md:w-[45%] border border-[#575757] rounded-[20px]'>
                    <div className='rounded-lg overflow-hidden bg-white shadow-md p-[2vw]'>
                        <p className='mb-[2vw] text-[3vw]'>Administra tu carta</p>
                        <button
                            onClick={handleRedirectToLoadProduct}
                            className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[6vw] w-[25vw] text-[3vw]'>
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
            {/* Sección inferior */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[4vw] mt-[4vw]'>
                {productsData.length > 0 ? (
                    productsData.map((producto, index) => (
                        <div key={index} className='rounded-lg overflow-hidden bg-white shadow-md'>
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className='w-full h-auto object-cover'
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ManageProfileRestaurant;
