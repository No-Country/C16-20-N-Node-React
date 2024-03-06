import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo1 from '../../assets/logos/logo1.svg';

const LoginForm = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginFormSubmit = async (event) => {
        try {
            const response = await fetch("https://vaya-pronto.onrender.com/login", {
                method: "POST",
                headers: {
                    "Conten": "application/json",
                }
                body: JSON.stringify({
                    mail: mail,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error("Error al iniciar sesión");
            }
            const userData = await response.json();
            console.log(userData);
            localStorage.setItem("UserCurrent", JSON.stringify(userData));
            setRedirect('/restaurante/perfil');
        } catch (error) {
            setErrorMessage("El correo electrónico o la contraseña son incorrectos.");
        }
    };

    return (
        <div className='flex min-h-screen min-w-[350px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            <div className='w-full max-w-md my-10'>
                <img src={logo1} alt='logo1' className='w-full h-auto' />
                <form onSubmit={handleLoginFormSubmit} className='px-[22px]'>
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                        required
                        autoComplete='email'
                    />
                    <input
                        type='password'
                        id='password'
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px]'
                        required
                    />
                    <button
                        type='submit'
                        className='bg-[#00A896] border border-[#453A32] rounded-[20px] text-[36px] shadow-xl mt-[60px] w-full h-[60px]'>
                        Entrar
                    </button>
                    {errorMessage && <p className="text-center text-red-500 mt-2 text-[16px]">{errorMessage}</p>}
                </form>
                <p className='text-center text-[16px] pt-[60px]'>
                    ¿No estás registrado?{' '}
                    <Link to='/registro' className='ml-[11px] text-[#1F31C8] underline font-bold'>
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
