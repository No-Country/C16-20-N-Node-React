import { useState, useEffect } from 'react';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon6 from '../assets/icons/icon6.svg';
import { Navigate } from 'react-router-dom';

const SideBar = () => {
    const [selectedButton, setSelectedButton] = useState([]);
    const [redirect, setRedirect] = useState('');

    const handleButtonClick = (name) => {
        setSelectedButton(name);
    };

    useEffect(() => {
        if (selectedButton === 'Salir') {
            localStorage.removeItem('UserCurrent');
            setRedirect('/');
        }

        if (selectedButton === 'Perfil') {
            setRedirect('/restaurante/perfil');
        }

        if (selectedButton === 'Platos') {
            setRedirect('/restaurante/platos');
        }
    }, [selectedButton]);

    return (
        <div className="bg-[#FF7C58] flex flex-col min-w-16">
            {redirect && <Navigate to={redirect} />}
            {[
                { name: 'Platos', icon: icon2 },
                { name: 'Pedidos', icon: icon3 },
                { name: 'Perfil', icon: icon4 },
                { name: 'Salir', icon: icon6 }
            ].map(({ name, icon }) => (
                <button
                    key={name}
                    onClick={() => handleButtonClick(name)}
                    className={`flex items-center py-4 justify-center md:pr-5 md:justify-between border-l-0 border-r-0 transition-colors duration-300 ease-in-out ${selectedButton === name ? 'bg-[#00A896] border-black border-[2px]' : 'hover:bg-[#FF975A]'}`}
                >
                    <p className='hidden md:block text-sm md:text-base mx-5 md:w-28 text-start'>{name}</p>
                    <img src={icon} alt={name} className='h-[30px] md:h-[44px]  w-[30px] md:w-[46px] transition-transform duration-300 ease-in-out transform hover:scale-110' />
                </button>
            ))}
        </div>
    );
};

export default SideBar;
