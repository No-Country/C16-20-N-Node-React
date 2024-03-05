import { useState, useEffect } from 'react';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon6 from '../assets/icons/icon6.svg';
import { Navigate } from 'react-router-dom';

const SideBar = () => {
    const [selectedButton, setSelectedButton] = useState(localStorage.getItem('selectedButton') || '');
    const [redirect, setRedirect] = useState('');
    const userCurrent = JSON.parse(localStorage.getItem('UserCurrent')) || {};

    const handleButtonClick = (name) => {
        setSelectedButton(name);
        localStorage.setItem('selectedButton', name);
    };

    useEffect(() => {
        if (selectedButton === 'Salir') {
            localStorage.removeItem('UserCurrent');
            localStorage.removeItem('selectedButton');
            setRedirect('/');
            return;
        }

        if (userCurrent.role === 'restaurante') {
            switch (selectedButton) {
                case 'Perfil':
                    setRedirect('/restaurante/perfil');
                    break;
                case 'Platos':
                    setRedirect('/restaurante/platos');
                    break;
                case 'Pedidos':
                    setRedirect('/restaurante/pedidos');
                    break;
                default:
                    setRedirect('');
            }
        } else if (userCurrent.role === 'cliente') {
            switch (selectedButton) {
                case 'Platos':
                    setRedirect('/cliente/productos');
                    break;
                    case 'Pedidos':
                    setRedirect('');
                    break;
                default:
                    setRedirect('');
            }
        }
    }, [selectedButton, userCurrent.role]);

    return (
        <div className="bg-[#FF7C58] flex flex-col min-w-16 md:w-[250px] md:max-w-[190px]">
            {redirect && <Navigate to={redirect} />}
            {[
                { name: 'Platos', icon: icon2, visible: userCurrent.role === 'restaurante' || userCurrent.role === 'cliente' },
                { name: 'Pedidos', icon: icon3, visible: userCurrent.role === 'restaurante' || userCurrent.role === 'cliente'},
                { name: 'Perfil', icon: icon4, visible: userCurrent.role === 'restaurante' },
                { name: 'Salir', icon: icon6, visible: userCurrent.role === 'restaurante' || userCurrent.role === 'cliente' }
            ].map(({ name, icon, visible }) => (
                visible &&
                <button
                    key={name}
                    onClick={() => handleButtonClick(name)}
                    className={`flex items-center py-10 justify-between px-5 border-l-0 border-r-0 transition-colors duration-300 ease-in-out ${selectedButton === name ? 'bg-[#00A896] border-black border-[2px]' : 'hover:bg-[#FF975A]'}`}
                >
                    <p className='hidden md:block text-[20px] font-bold text-start'>{name}</p>
                    <img src={icon} alt={name} className='h-[30px] md:h-[44px] w-[30px] md:w-[46px] transition-transform duration-300 ease-in-out transform hover:scale-110' />
                </button>
            ))}
        </div>
    );
};

export default SideBar;
