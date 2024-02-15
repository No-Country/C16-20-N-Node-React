import { useState } from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({ tipoUsuario, onRegistroCompletado }) => {
    const [nombre, setNombre] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [rubro, setRubro] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegistroCompletado(tipoUsuario);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-color1 min-w-max">
            <form onSubmit={handleSubmit} className="w-1/2 max-w-sm min-w-max">
                <div className="mb-4">
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        placeholder='Nombre'
                        onChange={(e) => setNombre(e.target.value)}
                        className="placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="localidad"
                        value={localidad}
                        placeholder='Localidad'
                        onChange={(e) => setLocalidad(e.target.value)}
                        className="placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="rubro"
                        value={rubro}
                        placeholder='Rubro'
                        onChange={(e) => setRubro(e.target.value)}
                        className="placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        className="placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Contraseña'
                        onChange={(e) => setPassword(e.target.value)}
                        className="placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="passwordConfirm"
                        value={passwordConfirm}
                        placeholder='Repetir contraseña'
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        className="placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                    />
                </div>
                <div className="flex items-center justify-center mt-20">
                    <button
                        type="submit"
                        className="bg-color2 text-black py-4 px-20 text-2xl">
                        Registrate
                    </button>
                </div>
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    tipoUsuario: PropTypes.string.isRequired,
    onRegistroCompletado: PropTypes.func.isRequired,
};

export default RegisterForm;
