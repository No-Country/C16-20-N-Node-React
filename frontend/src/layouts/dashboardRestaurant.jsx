import { useState } from 'react';
import image12 from '../assets/image12.svg';
import icon34 from '../assets/icon34.svg';
import icon35 from '../assets/icon35.svg';
import icon36 from '../assets/icon36.svg';
import ManageProducts from '../pages/restaurant/manageProducts';
import ManageDelivery from '../pages/restaurant/mangeDelivery';
import PerfilRestaurant from '../pages/restaurant/perfilRestaurant';

const DashboardRestaurant = () => {
    const [selectedButton, setSelectedButton] = useState('Perfil');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    return (
        <div className='flex flex-col min-h-screen min-w-max bg-white'>
            <div className='flex justify-center md:justify-start h-[172px] w-full'>
                <img src={image12} alt='image12' className='ml-[136px] h-[142px] w-[208px] min-w-[208px] min-h-[142px]' />
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
            <div className='flex'>
                <div className='flex flex-col md:min-w-[256px] md:w-[256px] bg-[#FF7C58] min-w-[103px] w-[103px]'>
                    {[
                        { name: 'Platos', icon: icon34 },
                        { name: 'Pedidos', icon: icon35 },
                        { name: 'Perfil', icon: icon36 }
                    ].map(({ name, icon }) => (
                        <button
                            key={name}
                            onClick={() => handleButtonClick(name)}
                            className={`flex w-full h-[84px] items-center justify-center border-l-[0] border-r-[0]
                                ${selectedButton === name ? 'bg-[#00A896] border-black border-[2px]' : ''}
                            `}
                        >
                            <p className='hidden md:block md:w-full md:text-left md:pl-[63px] text-[16px]'>{name}</p>
                            <img src={icon} alt={name} className='md:object-cover md:mr-[40px] flex h-[44px] w-[46px]' />
                        </button>
                    ))}
                </div>
                {selectedButton === 'Perfil' && <PerfilRestaurant />}
                {selectedButton === 'Platos' && <ManageProducts />}
                {selectedButton === 'Pedidos' && <ManageDelivery />}
            </div>
        </div>
    );
};

export default DashboardRestaurant;
