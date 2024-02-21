import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon33 from '../../assets/icon33.svg';
import imagen12 from '../../assets/image12.svg';

const HomePage = () => {
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');
    const opciones = ['Cliente', 'Restaurante', 'Repartidor'];
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSeleccionUsuario = (usuario) => {
        setUsuarioSeleccionado(usuario);
        setMostrarOpciones(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            email: email,
            contraseña: contraseña,
            usuario: usuarioSeleccionado
        };
        console.log('solicitud de acceso enviado!')
        console.log('Datos que se envian:', formData);

        try {
            const response = await fetch('https://vaya-pronto.onrender.com/usuario/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setRedirect(true);
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
            {redirect && <Navigate to="/registerRestaurant" />}
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
                        flex flex-col mx-8 gap-3
                    '>
                        <input
                            type='text'
                            id='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='
                                placeholder-black text-black border border-1 border-black w-full py-2 px-3 rounded-2xl
                            '
                        />
                        <input
                            type='password'
                            id='contraseña'
                            placeholder='Contraseña'
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            className='
                                placeholder-black text-black border border-1 border-black w-full py-2 px-3 rounded-2xl
                            '
                        />
                        <div className='relative'>
                            <div
                                className='border border-1 border-black rounded-lg w-full py-2 px-3 flex items-center justify-between cursor-pointer'
                                onClick={() => setMostrarOpciones(!mostrarOpciones)}
                            >
                                <span>{usuarioSeleccionado || 'Selecciona un usuario'}</span>
                                <img src={icon33} alt='icon' className='w-6 h-6 mr-2' />
                            </div>
                            {mostrarOpciones && (
                                <div className='absolute bg-white border border-1 border-black rounded-lg w-full mt-2'>
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
                                bg-teal-600 border border-1 border-black rounded-2xl py-4 text-4xl
                            '>
                            Entrar
                        </button>
                    </div>
                </form>
                <p className='text-center'>
                    ¿Ya estás registrado?
                    <a
                        className='underline text-blue-600 font-medium ml-4'
                        href='/'>
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
