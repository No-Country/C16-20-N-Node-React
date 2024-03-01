import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo1 from '../../assets/logos/logo1.svg';
import usersData from '../../resources/users.json';

const LoginForm = ({ setCurrentUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        // Expresión regular para validar el formato del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        try {
            // Validar el formato del correo electrónico
            if (!emailPattern.test(email)) {
                setErrorMessage('El correo electrónico ingresado no es válido');
                return;
            }

            // Validar la longitud de la contraseña
            if (password.length >= 10) {
                setErrorMessage('La contraseña debe tener menos de 10 caracteres');
                return;
            }

            const users = usersData.users;
            const userIndex = users.findIndex((user) => user.mail === email && user.password === password);

            if (userIndex !== -1) {
                const currentUser = users[userIndex];
                setCurrentUser(currentUser);
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                if (currentUser.role === 'restaurante') {
                    setRedirect('/dashboardRestaurant');
                }
            } else {
                const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
                if (localStorageUser && localStorageUser.mail === email && localStorageUser.password === password) {
                    setCurrentUser(localStorageUser);
                    if (localStorageUser.role === 'restaurante') {
                        setRedirect('/dashboardRestaurant');
                    }
                } else {
                    setErrorMessage('Credenciales incorrectas, inténtalo de nuevo');
                }
            }
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const handleRegisterFormRedirect = () => {
        setRedirect('/registerForm');
    };

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex flex-col w-[400px] h-[551px] min-w-[400px] min-h-full my-[15px]'>
                <img src={logo1} alt='logo1' className='w-full h-[242px] min-h-[242px] object-cover mb-[10px]' />
                <form onSubmit={handleSubmitLogin} className='flex flex-col w-full text-center h-full px-[22px]'>
                    <input
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                        autoComplete='off'
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
                    <button
                        type='submit'
                        className='bg-[#00A896] border border-[#453A32] rounded-[20px] text-[36px] shadow-xl mt-[60px] w-full h-[60px]'>
                        Entrar
                    </button>
                    {errorMessage && <p className="absolute left-0 right-0 mt-[230px] text-red-500 text-sm">{errorMessage}</p>}
                </form>
                <p
                    className='text-center text-[16px] pt-[60px]'>
                    ¿No estás registrado?
                    <a
                        onClick={handleRegisterFormRedirect}
                        className='ml-[11px] text-[#1F31C8] underline font-medium cursor-pointer'>
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    setCurrentUser: PropTypes.func,
}

export default LoginForm;
