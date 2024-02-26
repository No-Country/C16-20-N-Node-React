import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterRestaurant = () => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [rubro, setRubro] = useState('');
    const [telefono, setTelefono] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { nombre, direccion, rubro, telefono };
        console.log('Solicitud de registro enviada!');
        console.log('Datos enviados:', formData);

        setRedirect(true);
    };

    return (
        <div className='flex min-h-screen min-w-[544px] bg-white items-center justify-center'>
            {redirect && <Navigate to="/dashboardRestaurant" />}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[30px] items-center w-[544px] h-full min-w-[544px]'>
                {[
                    { id: 'nombre', value: nombre, placeholder: 'Nombre', onChange: setNombre },
                    { id: 'direccion', value: direccion, placeholder: 'Dirección', onChange: setDireccion },
                    { id: 'rubro', value: rubro, placeholder: 'Rubro', onChange: setRubro },
                    { id: 'telefono', value: telefono, placeholder: 'Teléfono', onChange: setTelefono }
                ].map(({ id, value, placeholder, onChange }) => (
                    <input
                        key={id}
                        type='text'
                        id={id}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e.target.value)}
                        className='placeholder-[#949494] rounded-[30px] border border-[#453A32] w-full h-[42px] px-[18px]'
                    />
                ))}
                <button
                    type='submit'
                    className='bg-[#00A896] border border-[#453A32] rounded-[20px] mt-[60px] h-[60px] w-[351px] text-[36px]'>
                    Regístrate
                </button>
            </form>
        </div>
    );
};

export default RegisterRestaurant;
