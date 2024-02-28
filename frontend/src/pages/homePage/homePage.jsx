import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon33 from '../../assets/icon33.svg';
import imagen12 from '../../assets/image12.svg';
import userData from '../../api/users.json';

const HomePage = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [redirect, setRedirect] = useState(null);

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            {!showRegister ? (
                <LoginForm setShowRegister={setShowRegister} setRedirect={setRedirect} />
            ) : (
                <RegisterForm setShowRegister={setShowRegister} setRedirect={setRedirect} />
            )}
        </div>
    );
};

const LoginForm = ({ setShowRegister, setRedirect }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setMensajeError] = useState(false);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        const formData = {
            mail: mail,
            password: password
        };
        console.log('Frontend: Formulario de login enviado!', formData);

        const user = userData.users.find(user => user.mail === mail);
        if (user) {
            if (user.password === password) {
                console.log('Frontend: Email correcto!, Contraseña correcto! - Acceso autorizado a ' + mail);
                setRedirect('/dashboardRestaurant');
            } else {
                console.log('Frontend: Email correcto! - Contraseña incorrecto! - Acceso no autorizado a ' + mail);
            }
        } else {
            console.log('Frontend: Email incorrecto! - Acceso no autorizado a ' + mail);
            setMensajeError(true);
        }
    };

    return (
        <div className='flex flex-col w-[400px] h-[551px] min-w-[400px] min-h-full my-[15px]'>
            <img src={imagen12} alt='imagen12' className='w-full h-[242px] min-h-[242px] object-cover mb-[10px]' />
            <form onSubmit={handleSubmitLogin} className='flex flex-col w-full text-center h-full px-[22px]'>
                <input
                    type='text'
                    id='email'
                    placeholder='Email'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                    autoComplete='off'
                />
                <input
                    type='password'
                    id='contraseña'
                    placeholder='Contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px]'
                />
                <button
                    type='submit'
                    className='bg-[#00A896] border border-[#453A32] rounded-[20px] text-[36px] shadow-xl mt-[60px] w-full h-[60px]'>
                    Entrar
                </button>
                {mensajeError && <p className="absolute left-0 right-0 mt-[230px] text-red-500 text-sm">Debes registrarte para poder iniciar sesión</p>}
            </form>
            <p
                className='text-center text-[16px] pt-[60px]'>
                ¿No estás registrado?
                <a
                    onClick={() => setShowRegister(true)}
                    className='ml-[11px] text-[#1F31C8] underline font-medium cursor-pointer'>
                    Regístrate
                </a>
            </p>
        </div>
    );
};

LoginForm.propTypes = {
    setShowRegister: PropTypes.func.isRequired,
    setRedirect: PropTypes.func.isRequired,
};

const RegisterForm = ({ setRedirect }) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const options = ['Cliente', 'Restaurante', 'Repartidor'];

    const handleSubmitRegister = async (event) => {
        event.preventDefault();
        const formData = {
            mail: mail,
            password: password,
            role: role
        };
        console.log('Frontend: Formulario de registro enviado!', formData);

        const user = userData.users.find(user => user.mail === mail);
        if (!user) {
            console.log('Frontend: Email correcto!, Contraseña correcto! - Acceso autorizado a ' + mail);
            setRedirect('/registerRestaurant');
        } else {
            console.log('Frontend: El Email ' + mail + ' ya existe! - Acceso no autorizado');
        }
    };

    const handleRole = (usuario) => {
        setRole(usuario);
        setShowOptions(false);
    };

    return (
        <div className='flex flex-col w-[400px] h-full min-w-[400px] min-h-full my-[15px]'>
            <img src={imagen12} alt='imagen12' className='w-full h-[242px] min-h-[242px] object-cover mb-[10px]' />
            <form onSubmit={handleSubmitRegister} className='flex flex-col w-full text-center h-full px-[22px]'>
                <input
                    type='text'
                    id='email'
                    placeholder='Email'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                />
                <input
                    type='password'
                    id='contraseña'
                    placeholder='Contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px]'
                />
                <div className='relative mt-[30px]'>
                    <div onClick={() => setShowOptions(!showOptions)} className='border border-[#453A32] rounded-[30px] shadow-xl w-full h-[42px] px-[17px] flex items-center justify-between cursor-pointer'>
                        <span>{role || 'Selecciona un usuario'}</span>
                        <img
                            src={icon33}
                            alt='icon'
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
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    setRedirect: PropTypes.func.isRequired,
};

export default HomePage;
