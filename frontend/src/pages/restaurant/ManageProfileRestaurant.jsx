import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import icon5 from '../../assets/icons/icon5.svg';
import TopBar from '../../layouts/TopBar';
import SideBar from '../../layouts/SideBar'

const ManageProfileRestaurant = () => {
    const [redirect, setRedirect] = useState(null);
    const [productsData, setProductsData] = useState([]);
    const [profile, setProfile] = useState('');

    useEffect(() => {
        const storedUserCurrent = JSON.parse(localStorage.getItem('UserCurrent'));
        const storedProfileData = JSON.parse(localStorage.getItem('ProfileUsers'));
        const storedProducts = localStorage.getItem('ProductsData');

        if (typeof storedUserCurrent === 'object' && storedProfileData) {
            const userProfile = storedProfileData.find(profile => profile.mail === storedUserCurrent.mail);
            if (userProfile) {
                setProfile(userProfile);
            }
        }

        if (storedProducts) {
            const allProducts = JSON.parse(storedProducts);
            const userProducts = allProducts.filter(product => product.mail === storedUserCurrent.mail);
            setProductsData(userProducts);
        }
    }, []);

    const handleRedirectToLoadProduct = () => {
        setRedirect('/restaurante/cargar-producto');
    };

    const handleRedirectToRegister = () => {
        setRedirect('/profileUpdateForm');
    };

    return (
        <>
            {redirect && <Navigate to={redirect} />}
            <TopBar />
            <div className="mx-auto min-w-[350px] h-screen flex">
                <SideBar />
                <div className='flex flex-col w-full mx-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8 sm:my-10'>
                        {/* Sección izquierda */}
                        <div className='flex shadow-xl border border-[#4E5858] rounded-[20px]'>
                            <div className="flex items-center justify-center w-1/3 px-3">
                                <div className='rounded-lg overflow-hidden w-[150px] flex justify-center items-center'>
                                    <img
                                        src={profile?.logo}
                                        alt=''
                                        className='w-full object-cover'
                                    />
                                </div>
                            </div>
                            <div className='flex pt-5 px-5 w-full'>
                                <div className='rounded-lg overflow-hidden bg-white mb-4 flex-grow relative'>
                                    <p className='text-lg font-medium mb-2'>{profile?.name}</p>
                                    <p className='text-sm mb-2'>{profile?.address}</p>
                                    <p className='text-sm'>{profile?.phone}</p>
                                    <div className="absolute bottom-0 right-0">
                                        <img
                                            src={icon5}
                                            alt='icon5'
                                            onClick={handleRedirectToRegister}
                                            className='cursor-pointer w-8 h-8 object-cover self-end'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sección derecha */}
                        <div className='flex text-center items-center shadow-xl border border-[#4E5858] rounded-[20px]'>
                            <div className='rounded-lg p-4 flex-grow'>
                                <p className='text-lg mb-4'>Administra tu carta</p>
                                <button
                                    onClick={handleRedirectToLoadProduct}
                                    className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[48px] w-full text-lg'>
                                    Entrar
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sección inferior */}
                    <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8'>
                        {productsData.length > 0 ? (
                            productsData.map((producto, index) => (
                                <div key={index} className='max-h-[120px] max-w-xs sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg bg-white shadow-md'>
                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center">No hay productos disponibles.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageProfileRestaurant;