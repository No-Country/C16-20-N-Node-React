import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon1 from '../../assets/icons/icon1.svg';
import logo1 from '../../assets/logos/logo1.svg';
import usersData from '../../resources/users.json';

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

        try {
            const users = usersData.users;
            const userIndex = users.findIndex((user) => user.mail === mail);

            if (userIndex !== -1) {
                console.log('El correo ya está registrado, registro denegado!');
                setErrorMessage(true);
            } else {
                const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
                if (localStorageUser !== null && localStorageUser.mail === mail) {
                    console.log('El correo ya está registrado en localStorage, registro denegado!');
                    setErrorMessage(true);
                } else {
                    if (!validateEmail(mail)) {
                        console.log('El correo electrónico no tiene un formato válido!');
                        setErrorMessage(true);
                        return;
                    }
                    
                    if (password.length > 10) {
                        console.log('La contraseña no puede tener más de 10 caracteres!');
                        setErrorMessage(true);
                        return;
                    }

                    const newUser = { mail: mail, password: password, role: role };
                    localStorage.setItem('currentUser', JSON.stringify(newUser));
                    console.log('Registro exitoso desde localStorage!');
                    if (role === 'restaurante') {
                        setRedirect('/registerFormRestaurant');
                    }
                }
            }
        } catch (error) {
            console.error('Error al verificar usuarios:', error);
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
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
                        required // Campo requerido
                    />
                    <input
                        type='password'
                        id='contraseña'
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px]'
                        required // Campo requerido
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
                    {errorMessage && <p className="text-red-500 mt-2">Error en el registro. Por favor, verifica los campos!</p>}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
