import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import imagen12 from '../../assets/image12.svg';

const LoginForm = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [mensajeError, setMensajeError] = useState(false);

    const handleRegisterFormRedirect = () => {
        setRedirect('/registerForm');
    };

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        const formData = { mail: mail, password: password };
        console.log('Frontend: Formulario de login enviado!', formData);

        try {
            const response = await fetch('https://vaya-pronto.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Respuesta del backend:', responseData);
                setRedirect('/dashboardRestaurant');
            } else {
                console.error('Error al enviar el formulario al backend');
                setMensajeError(true);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
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
                        onClick={handleRegisterFormRedirect}
                        className='ml-[11px] text-[#1F31C8] underline font-medium cursor-pointer'>
                        Regístrate
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
