import { useState } from 'react';
import logo1 from '../assets/logos/logo1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon6 from '../assets/icons/icon6.svg';
import icon7 from '../assets/icons/icon7.svg';

const NavigationBarRestaurant = () => {
    const [mostrarBotones, setMostrarBotones] = useState(false);
    const [selectedButton, setSelectedButton] = useState('Platos');

    const handleButtonClick = (name) => {
        setSelectedButton(name);
        setMostrarBotones(false);
    };

    return (
        <div className="relative flex flex-col">
            <img src={logo1} alt='logo1' className='m-auto h-[142px] w-[208px] min-w-[208px] min-h-[142px]' />
            <div className="bg-[#FF7C58] px-4 py-2 flex  items-center">
                <button onClick={() => setMostrarBotones(!mostrarBotones)} className="text-white">
                    <img src={icon7} className='h-[20px]' />
                </button>
                {mostrarBotones && (
                    <div className="absolute top-[calc(100%)] left-0 z-10 bg-[#FF7C58] flex flex-col md:min-w-[256px] md:w-[256px]">
                        {[
                            { name: 'Platos', icon: icon2 },
                            { name: 'Pedidos', icon: icon3 },
                            { name: 'Perfil', icon: icon4 },
                            { name: 'Salir', icon: icon6 }
                        ].map(({ name, icon }) => (
                            <button
                                key={name}
                                onClick={() => handleButtonClick(name)}
                                className={`flex items-center my-[20px] justify-center border-l-[0] border-r-[0] ${selectedButton === name ? 'bg-[#00A896] border-black border-[2px]' : ''}`}
                            >
                                <img src={icon} alt={name} className='mr-[40px] h-[44px] w-[46px]' />
                                <p className='hidden md:block text-[16px]'>{name}</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationBarRestaurant;
