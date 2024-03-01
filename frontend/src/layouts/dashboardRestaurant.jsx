import { useState, useEffect } from 'react';
import logo1 from '../assets/logos/logo1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
//import ManageProducts from '../pages/restaurant/manageProducts';
//import ManageDelivery from '../pages/restaurant/mangeDelivery';
import ManagePerfil from '../pages/restaurant/managePerfil';
import ManageProducts from '../pages/restaurant/manageProducts';

const DashboardRestaurant = () => {
    const [selectedButton, setSelectedButton] = useState('Perfil');
    const [sessionData, setSessionData] = useState(() => {
        const session = localStorage.getItem('currentSession');
        return session ? JSON.parse(session) : null;
    });

    useEffect(() => {
        const session = localStorage.getItem('currentSession');
        if (!sessionData && session) {
            setSessionData(JSON.parse(session));
        }
    }, [sessionData]);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    return (
        <div className='flex flex-col min-h-screen min-w-max bg-white'>
            <div className='flex justify-center md:justify-start h-[172px] w-full'>
                <img src={logo1} alt='logo1' className='ml-[136px] h-[142px] w-[208px] min-w-[208px] min-h-[142px]' />
            </div>
            <div className='flex text-[16px] min-h-[72px] h-[72px] w-full bg-[#FF7C58] pl-[319px]'>
                {selectedButton === 'Platos' &&
                    <table className="w-full border-collapse text-left">
                        <tbody>
                            <tr className='w-full'>
                                <th className='font-medium w-[235px]'>Nombre</th>
                                <th className='font-medium w-[235px]'>Descripción</th>
                                <th className='font-medium w-[122px]'>Precio</th>
                                <th className='font-medium w-[154px]'>Tiempo de espera</th>
                                <th className='font-medium w-[120px]'>Imagen</th>
                                <th className='font-medium'>Editar</th>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
            <div className='flex min-h-screen'>
                <div className='flex flex-col md:min-w-[256px] md:w-[256px] bg-[#FF7C58] min-w-[103px] w-[103px]'>
                    {[
                        { name: 'Platos', icon: icon2 },
                        { name: 'Pedidos', icon: icon3 },
                        { name: 'Perfil', icon: icon4 }
                    ].map(({ name, icon }) => (
                        <button
                            key={name}
                            onClick={() => handleButtonClick(name)}
                            className={`flex w-full h-[84px] items-center justify-center border-l-[0] border-r-[0]
                                ${selectedButton === name ? 'bg-[#00A896] border-black border-[2px]' : ''}
                            `}
                        >
                            <p className='hidden md:block md:w-full md:text-left md:pl-[63px] text-[16px]'>{name}</p>
                            <img src={icon} alt={name} className='md:mr-[40px] flex h-[44px] w-[46px]' />
                        </button>
                    ))}
                </div>
                {selectedButton === 'Perfil' && <ManagePerfil currentUser={sessionData} />}
                {selectedButton === 'Platos' && <ManageProducts />}
                {/*
                {selectedButton === 'Pedidos' && <ManageDelivery />}
                */}
            </div>
        </div>
    );
};

export default DashboardRestaurant;
