import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon1 from '../../assets/icons/icon1.svg';
import logo1 from '../../assets/logos/logo1.svg';

const RegisterForm = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [redirect, setRedirect] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const options = ['cliente', 'repartidor', 'restaurante'];

    const handleRole = (usuario) => {
        setRole(usuario);
        setShowOptions(false);
    };

    const handleSubmitRegister = async (event) => {
        event.preventDefault();
        let userData = [];
        const storedUserData = localStorage.getItem('UsersData');
        if (storedUserData) {
            userData = JSON.parse(storedUserData);
            const existingUser = userData.find(user => user.mail === mail);
            if (existingUser) {
                setErrorMessage(true);
                return;
            }
        }

        const newUser = { mail, password, role };
        localStorage.setItem('UsersData', JSON.stringify([...userData, newUser]));
        localStorage.setItem('UserCurrent', JSON.stringify({ mail, role }));

        if (role === 'restaurante') {
            setRedirect('/restaurante/registro');
        } else if ((role === 'cliente')) {
            setRedirect('/cliente/productos');
        }
    };

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex flex-col w-[400px] h-full min-w-[400px] min-h-full my-[15px]'>
                <img src={logo1} alt='logo1' className='w-full h-[242px] min-h-[242px] object-cover mb-[10px]' />
                <form onSubmit={handleSubmitRegister} className='flex flex-col w-full text-center h-full px-[22px]'>
                    <input
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                        required
                    />
                    <input
                        type='password'
                        id='contraseña'
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px]'
                        required
                    />
                    <div className='relative mt-[30px]'>
                        <div onClick={() => setShowOptions(!showOptions)} className='border border-[#453A32] rounded-[30px] shadow-xl w-full h-[42px] px-[17px] flex items-center justify-between cursor-pointer'>
                            <span>{role || 'Selecciona un usuario'}</span>
                            <img
                                src={icon1}
                                alt='icon1'
                                className='w-[16px] h-[10px] mr-[15px] object-cover' />
                        </div>
                        {showOptions && (
                            <div className='absolute bg-white border border-[#453A32] rounded-[20px] w-full mt-[8px]'>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className='text-left px-[22px] py-[8px] h-[35px] cursor-pointer'
                                        onClick={() => handleRole(option)}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='bg-[#00A896] border border-[#453A32] rounded-[20px] text-[36px] shadow-xl mt-[30px] w-full h-[60px]'>
                        Entrar
                    </button>
                    {errorMessage && <p className="text-red-500 mt-2">No se puede redireccionar a este rol!</p>}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
