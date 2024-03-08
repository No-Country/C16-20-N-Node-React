import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import icon5 from '../../assets/icons/icon5.svg';
import TopBar from '../../layouts/TopBar';
import SideBar from '../../layouts/SideBar'

const ManageProfileRestaurant = () => {
    const [redirect, setRedirect] = useState(null);
    const [products, setProducts] = useState([]);
    const [userCurrent, setUserCurrent] = useState(null);

    useEffect(() => {
        const storedUserCurrent = JSON.parse(localStorage.getItem('UserCurrent'));
        setUserCurrent(storedUserCurrent);

        const fetchData = async () => {
            try {
                const response = await fetch('https://vaya-pronto.onrender.com/producto/restaurant/' + storedUserCurrent.usuario.id);
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);

    const handleRedirectToLoadProduct = () => {
        setRedirect('/restaurante/cargar-producto');
    };

    const handleRedirectToRegister = () => {
        setRedirect('/restaurante/actualizar-perfil');
    };

    return (
        <>
            {redirect && <Navigate to={redirect} />}
            <TopBar />
            <div className='flex min-h-screen w-full bg-white'>
                <SideBar />
                <div className='flex flex-col p-8 w-full'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8'>
                        {/* Sección izquierda */}
                        <div className='relative flex flex-col justify-center border items-center p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-xl'>
                            <div className='w-48 h-48 mb-4 overflow-hidden'>
                                <img
                                    src={`https://vaya-pronto.onrender.com/${userCurrent?.usuario?.logo}`}
                                    alt={userCurrent?.usuario?.logo}
                                    className='object-cover w-full h-full'
                                />
                            </div>
                            <div className='text-center'>
                                <p className='text-xl md:text-2xl font-bold mb-2'>{userCurrent?.usuario?.nombre_restaurant}</p>
                                <p className='text-sm md:text-lg mb-2'>{userCurrent?.usuario?.direccion_restaurant}</p>
                                <p className='text-sm md:text-lg'>{userCurrent?.usuario?.telefono_restaurant}</p>
                            </div>
                            <img
                                src={icon5}
                                alt='icon5'
                                onClick={handleRedirectToRegister}
                                className='cursor-pointer w-8 h-8 md:w-10 md:h-10 object-cover absolute bottom-8 right-12'
                            />
                        </div>
                        {/* Sección derecha */}
                        <div className='flex flex-col justify-center border items-center p-4 md:p-6 lg:p-6 bg-white rounded-xl shadow-xl'>
                            <p className='text-lg md:text-xl font-semibold mb-4'>Administra tu carta</p>
                            <button
                                onClick={handleRedirectToLoadProduct}
                                className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[48px] px-24 text-lg md:text-xl text-white hover:bg-green-700 transition duration-300'>
                                Entrar
                            </button>
                        </div>
                    </div>
                    {/* Sección inferior */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8'>
                        {products.length > 0 ? (
                            products.map((producto, index) => (
                                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden mt-4'>
                                    <img
                                        src={`https://vaya-pronto.onrender.com/${producto.imagen}`}
                                        alt={producto.nombre}
                                        className='w-full h-48 object-cover'
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
