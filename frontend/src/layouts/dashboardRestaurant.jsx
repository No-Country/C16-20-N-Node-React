import { useState } from 'react';
import image12 from '../assets/image12.svg';
import icon34 from '../assets/icon34.svg';
import icon35 from '../assets/icon35.svg';
import icon36 from '../assets/icon36.svg';
import PerfilRestaurant from '../pages/restaurant/perfilRestaurant';
import ManageProducts from '../pages/restaurant/manageProducts';

const DashboardRestaurant = () => {
    const [selectedButton, setSelectedButton] = useState('Perfil');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className='flex flex-col min-h-screen min-w-max bg-white'>
            <div className='h-[172px] w-full'>
                <img src={image12} alt='image12' className='ml-[136px] h-[142px] w-[208px] min-w-[208px] min-h-[142px]' />
            </div>
            <div className='flex text-[16px] min-h-[72px] h-[72px] w-full bg-[#FF7C58] pl-[319px]'>
                {selectedButton === 'Platos' &&
                    <table className="w-full border-collapse text-left">
                        <tr className='w-full'>
                            <th className='font-medium w-[235px]'>Nombre</th>
                            <th className='font-medium w-[235px]'>Descripción</th>
                            <th className='font-medium w-[122px]'>Precio</th>
                            <th className='font-medium w-[154px]'>Tiempo de espera</th>
                            <th className='font-medium w-[120px]'>Imagen</th>
                            <th className='font-medium'>Editar</th>
                        </tr>
                    </table>
                }
            </div>
            <div className='flex'>
                <div className='flex flex-col min-w-[256px] w-[256px] bg-[#FF7C58]'>
                    {[
                        { name: 'Platos', icon: icon34 },
                        { name: 'Pedidos', icon: icon35 },
                        { name: 'Perfil', icon: icon36 }
                    ].map(({ name, icon }) => (
                        <button
                            key={name}
                            onClick={() => handleButtonClick(name)}
                            className={`flex w-full h-[84px] items-center border-l-[0] border-r-[0]
                                ${selectedButton === name ? 'bg-[#00A896] border-black border-[2px]' : ''}
                            `}
                        >
                            <p className='w-full text-left pl-[63px] text-[16px]'>{name}</p>
                            <img src={icon} alt={name} className='w-[46px] h-[44px] object-cover mr-[40px]' />
                        </button>
                    ))}
                </div>
                {selectedButton === 'Perfil' && <PerfilRestaurant />}
                {selectedButton === 'Platos' && <ManageProducts />}
            </div>
        </div>
    );
};

export default DashboardRestaurant;
