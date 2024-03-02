import { useState } from 'react';
import PropTypes from 'prop-types';
import logo1 from '../assets/logos/logo1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon6 from '../assets/icons/icon6.svg';
import icon7 from '../assets/icons/icon7.svg';
import icon8 from '../assets/icons/icon8.svg';
import icon9 from '../assets/icons/icon9.svg';

const NavigationBarCustomer = ({ onCarritoIconClick, cantidadCarrito }) => {
    const [mostrarBotones, setMostrarBotones] = useState(false);
    const [selectedButton, setSelectedButton] = useState('Platos');

    const handleButtonClick = (name) => {
        setSelectedButton(name);
        setMostrarBotones(false);
    };

    return (
        <div className="relative flex flex-col">
            <img src={logo1} alt='logo1' className='m-auto h-[142px] w-[208px] min-w-[208px] min-h-[142px]' />
            <div className="bg-[#FF7C58] px-4 py-[10px] flex">
                <button onClick={() => setMostrarBotones(!mostrarBotones)} className="text-white">
                    <img src={icon7} className='h-[20px]' />
                </button>
                <SearchBar />
                <button onClick={onCarritoIconClick} className="flex my-auto">
                    <img src={icon9} className="h-[20px]" />
                    {cantidadCarrito > 0 && <span className="bg-red-500 text-white text-[14px] rounded-full px-[8px] py-[2px] ">{cantidadCarrito}</span>}
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

const SearchBar = () => {
    return (
        <div className="mx-auto relative">
            <input
                type="text"
                placeholder="¿Qué desea comer?"
                className="pl-10 pr-2 py-[1px] w-[40vw] rounded-[30px] border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={icon8} className="h-[20px]" />
            </div>
        </div>
    );
};

NavigationBarCustomer.propTypes = {
    onCarritoIconClick: PropTypes.func,
    cantidadCarrito: PropTypes.number,
}

export default NavigationBarCustomer;
