import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon33 from '../../assets/icon33.svg';
import imagen12 from '../../assets/image12.svg';
import userData from '../../api/users.json';

const HomePage = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [role, setRole] = useState('');
    const options = ['Cliente', 'Restaurante', 'Repartidor'];
    const [redirect, setRedirect] = useState(null);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const formData = {
        mail: mail,
        password: password,
        role: role
    };

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
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
        }
    };

    const handleSubmitRegister = async (event) => {
        event.preventDefault();
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
        <div
            className='flex h-screen w-screen bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            {!showRegister ? (
                <div
                    className='w-[400px] h-[551px] bg-white'>
                    <img
                        src={imagen12}
                        alt='imagen12'
                    />
                    <form onSubmit={handleSubmitLogin}>
                        <div className='flex flex-col items-center mx-8'>
                            <input
                                type='text'
                                id='email'
                                placeholder='Email'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className='font-[roboto] text-[16px] placeholder-black text-black rounded-[30px] border-[1px] border-[#575757] w-[356px] py-[7px] px-[18px]'
                            />
                            <input
                                type='password'
                                id='contraseña'
                                placeholder='Contraseña'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='font-[roboto] text-[16px] placeholder-black text-black rounded-[30px] border-[1px] border-[#575757] w-[356px] py-[7px] px-[18px] mt-[16px]'
                            />
                            <button
                                type='submit'
                                className='bg-teal-600 border border-1 border-black rounded-2xl py-[8px] text-4xl mt-[60px] w-[352px]'>
                                Entrar
                            </button>
                        </div>
                    </form>
                    <p className='flex justify-center font-[roboto] text-[16px] pt-[60px]'>¿No estas registrado?<a onClick={() => setShowRegister(true)} className='ml-[11px] text-[#1F31C8] underline font-medium'>Resgistrate</a></p>
                </div>
            ) : (

                <div
                    className='
                    w-96 h-auto bg-white
                '>
                    <img
                        className='
                    '
                        src={imagen12}
                        alt='imagen12'
                    />
                    <form
                        onSubmit={handleSubmitRegister}
                        className=''>
                        <div className='
                        flex flex-col mx-8
                    '>
                            <input
                                type='text'
                                id='email'
                                placeholder='Email'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className='
                                placeholder-black text-black border border-1 border-black w-full py-2 px-3 rounded-2xl
                            '
                            />
                            <input
                                type='password'
                                id='contraseña'
                                placeholder='Contraseña'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='
                                placeholder-black mt-[16px] text-black border border-1 border-black w-full py-2 px-3 rounded-2xl
                            '
                            />
                            <div className='relative mt-[30px]'>
                                <div
                                    className='border border-1 border-black rounded-lg w-full py-2 px-3 flex items-center justify-between cursor-pointer'
                                    onClick={() => setShowOptions(!showOptions)}
                                >
                                    <span>{role || 'Selecciona un usuario'}</span>
                                    <img src={icon33} alt='icon' className='w-6 h-6 mr-2' />
                                </div>
                                {showOptions && (
                                    <div className='absolute bg-white border border-1 border-black rounded-lg w-full mt-[8px]'>
                                        {options.map((option, index) => (
                                            <div
                                                key={index}
                                                className='px-3 py-1 cursor-pointer hover:bg-gray-200'
                                                onClick={() => handleRole(option)}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button
                                type='submit'
                                className='
                                bg-teal-600 border border-1 border-black rounded-2xl py-4 text-4xl mt-[30px]
                            '>
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default HomePage;
