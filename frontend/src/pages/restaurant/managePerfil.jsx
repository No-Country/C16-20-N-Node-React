import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon5 from '../../assets/icons/icon5.svg';
import productsData from '../../resources/products.json'
import profileData from '../../resources/profile.json'

const ManagePerfil = ({ currentUser }) => {
    const [redirect, setRedirect] = useState(null);
    const [userProducts, setUserProducts] = useState([]);
    const [userProfile, setUserProfile] = useState(null);

    const handleRedirectToLoadProduct = () => {
        setRedirect('/loadProduct');
    };

    const handleRedirectToRegister = () => {
        setRedirect('/profileUpdateForm');
    };

    useEffect(() => {
        if (currentUser) {
            const currentUserEmail = currentUser.mail;

            const productsFromJSON = productsData.products.filter(product => product.mail === currentUserEmail);
            const productsFromLocalStorage = JSON.parse(localStorage.getItem('productsCurrent')) || [];
            const filteredProductsFromLocalStorage = productsFromLocalStorage.filter(product => product.mail === currentUserEmail);
            const combinedProducts = [...productsFromJSON, ...filteredProductsFromLocalStorage];
            setUserProducts(combinedProducts);

            let filteredProfile = profileData.profile.find(profile => profile.mail === currentUserEmail);

            if (!filteredProfile) {
                const localStorageUser = JSON.parse(localStorage.getItem('currentProfile'));
                if (localStorageUser && localStorageUser.mail === currentUserEmail) {
                    filteredProfile = localStorageUser;
                }
            }
            setUserProfile(filteredProfile);
        }
    }, [currentUser]);

    return (
        <div className='flex flex-col min-h-screen bg-white my-[47px] px-[64px]'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex justify-between w-[959px] h-[200px]'>
                {/* seccion izquierda */}
                <div className='flex items-center justify-end w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <div className='flex mb-[25px] mr-[16px]'>
                        <img
                            alt='Image14'
                            className='w-[105px] h-[109px] object-cover rounded-[10px]'
                        />
                    </div>
                    <div className='flex flex-col justify-between w-[297px] h-[140px]'>
                        <p className='text-[24px] font-medium'>{userProfile ? userProfile.name : ''}</p>
                        <p className='text-[16px]'>{userProfile ? userProfile.address : ''}</p>
                        <p className='text-[16px]'>{userProfile ? userProfile.phone : ''}</p>
                        <img
                            src={icon5}
                            alt='icon5'
                            onClick={handleRedirectToRegister}
                            className='cursor-pointer w-[26px] h-[26px] object-cover self-end mr-[27px]'
                        />
                    </div>
                </div>
                {/* seccion derecha */}
                <div className='flex flex-col items-center justify-center w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <p className='mb-[22px] text-[24px]'>Administra tu carta</p>
                    <button
                        onClick={handleRedirectToLoadProduct}
                        className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[70px] w-[224px] text-[36px]'>
                        Entrar
                    </button>
                </div>
            </div>
            Galería de imágenes
            {currentUser && (
                <div className='flex flex-wrap justify-between mt-[36px] w-[960px]'>
                    {userProducts.map((producto, index) => (
                        <img
                            key={index}
                            src={producto.imagen}
                            alt={producto.nombre}
                            className={`w-[256px] h-[120px] object-cover rounded-[15px] mb-[56px]`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

ManagePerfil.propTypes = {
    currentUser: PropTypes.object,
}

export default ManagePerfil;
