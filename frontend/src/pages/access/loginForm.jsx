import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo1 from '../../assets/logos/logo1.svg';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //
    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();
        const storedData = sessionStorage.getItem('users');
        if (storedData) {
            const userData = JSON.parse(storedData).userData;
            if (userData && userData.mail === email && userData.password === password) {
                setRedirect('/dashboardRestaurant');
                onLogin();
            } else {
                setErrorMessage('El correo electrónico o la contraseña son incorrectos.');
            }
        } else {
            setErrorMessage('Debes registrarte para poder iniciar sesión');
        }
    };

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex flex-col w-[400px] h-[551px] min-w-[400px] min-h-full my-[15px]'>
                <img src={logo1} alt='logo1' className='w-full h-[242px] min-h-[242px] object-cover mb-[10px]' />
                <form onSubmit={handleLoginFormSubmit} className='flex flex-col w-full text-center h-full px-[22px]'>
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                    />
                    <input
                        type='password'
                        id='password'
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
                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                </form>
                <p className='text-center text-[16px] pt-[60px]'>
                    ¿No estás registrado?{' '}
                    <Link to='/registerForm' className='ml-[11px] text-[#1F31C8] underline font-medium'>
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired,
}

export default LoginForm;
