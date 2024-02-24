import { useState } from 'react';
import { Routes } from '../../api/routes';
import icon33 from '../../assets/icon33.svg';
import imagen12 from '../../assets/image12.svg';
import { Navigate } from 'react-router-dom'

const HomePage = () => {
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const [user, setUserSelection] = useState('');
    const opciones = ['Cliente', 'Restaurante', 'Repartidor'];
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(null);

    const handleSeleccionUsuario = (usuario) => {
        setUserSelection(usuario);
        setMostrarOpciones(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            mail: mail,
            password: password,
            user: user
        };
        console.log('Frontend: Formulario enviado! ', formData);

        try {
            const response = await fetch(Routes.checkAccount, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                if (data.message === 'Backend: El correo electrónico no existe') {
                    console.log('Frontend: No se permite el acceso al usuario ' + mail);
                    setRedirect('/registerRestaurant')
                } if (data.message === 'Backend: El correo electrónico ya existe') {
                    console.log('Frontend: Se permite el acceso al usuario ' + mail);
                    setRedirect('/dashboardRestaurant')
                }
            } else {
                console.error('Error al enviar la solicitud:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <div
            className='
                flex h-screen w-screen bg-white items-center justify-center
            '>
            {redirect && <Navigate to={redirect} />}
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
                    onSubmit={handleSubmit}
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
                            id='password'
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
                                onClick={() => setMostrarOpciones(!mostrarOpciones)}
                            >
                                <span>{user || 'Selecciona un usuario'}</span>
                                <img src={icon33} alt='icon' className='w-6 h-6 mr-2' />
                            </div>
                            {mostrarOpciones && (
                                <div className='absolute bg-white border border-1 border-black rounded-lg w-full mt-[8px]'>
                                    {opciones.map((opcion, index) => (
                                        <div
                                            key={index}
                                            className='px-3 py-1 cursor-pointer hover:bg-gray-200'
                                            onClick={() => handleSeleccionUsuario(opcion)}
                                        >
                                            {opcion}
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
        </div>
    );
};

export default HomePage;
