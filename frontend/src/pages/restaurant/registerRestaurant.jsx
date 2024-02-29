import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegisterRestaurant = ({ formData }) => {
    const [nombre_restaurant, setNombre] = useState('');
    const [dirección_restaurant, setDireccion] = useState('');
    const [rubro_restaurant, setRubro] = useState('');
    const [telefono_restaurant, setTelefono] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { mail, password, rol_usuario } = formData || {};

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { mail, password, rol_usuario, nombre_restaurant, dirección_restaurant, telefono_restaurant, rubro_restaurant };
        console.log('Frontend: formulario de datos enviado:', formData);
        try {
            const response = await fetch('https://vaya-pronto.onrender.com/usuario/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Respuesta del backend:', responseData);
                setRedirect(true);
            } else {
                console.error('Error al enviar el formulario al backend');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <div className='flex min-h-screen min-w-[544px] bg-white items-center justify-center'>
            {redirect && <Navigate to="/dashboardRestaurant" />}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[30px] items-center w-[544px] h-full min-w-[544px]'>
                {[
                    { id: 'nombre_restaurant', value: nombre_restaurant, placeholder: 'Nombre', onChange: setNombre },
                    { id: 'direccion', value: dirección_restaurant, placeholder: 'Dirección', onChange: setDireccion },
                    { id: 'rubro', value: rubro_restaurant, placeholder: 'Rubro', onChange: setRubro },
                    { id: 'telefono', value: telefono_restaurant, placeholder: 'Teléfono', onChange: setTelefono }
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

RegisterRestaurant.propTypes = {
    formData: PropTypes.object,
}

export default RegisterRestaurant;
