import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterFormRestaurant = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const currentUserJSON = localStorage.getItem('currentUser');
        const currentUser = JSON.parse(currentUserJSON);
        const profileData = { mail: currentUser.mail, name, address, category, phone };
        const newUserJSON = JSON.stringify(profileData);
        localStorage.setItem('currentProfile', newUserJSON);
        setRedirect(true);
    };

    return (
        <div className='flex min-h-screen min-w-[544px] bg-white items-center justify-center'>
            {redirect && <Navigate to="/" />}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[30px] items-center w-[544px] h-full min-w-[544px]'>
                {[
                    { id: 'nombre_restaurant', value: name, placeholder: 'Nombre', onChange: setName },
                    { id: 'direccion', value: address, placeholder: 'Dirección', onChange: setAddress },
                    { id: 'rubro', value: category, placeholder: 'Rubro', onChange: setCategory },
                    { id: 'telefono', value: phone, placeholder: 'Teléfono', onChange: setPhone }
                ].map(({ id, value, placeholder, onChange }) => (
                    <input
                        key={id}
                        type='text'
                        id={id}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e.target.value)}
                        className='placeholder-[#949494] rounded-[30px] border border-[#453A32] w-full h-[42px] px-[18px]'
                        required // Campo requerido
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

export default RegisterFormRestaurant;
