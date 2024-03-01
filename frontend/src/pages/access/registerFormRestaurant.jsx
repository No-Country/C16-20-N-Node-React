import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterFormRestaurant = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const restaurantData = {
            name,
            address,
            category,
            phone,
            logo: selectedFile ? URL.createObjectURL(selectedFile) : null
        };
        const userData = JSON.parse(sessionStorage.getItem('users'));
        const updateData = { userData, restaurantData };
        sessionStorage.setItem('users', JSON.stringify(updateData));
        setRedirect(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
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
                        required
                    />
                ))}
                <input
                    type='file'
                    id='subir-imagen'
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <label
                    htmlFor='subir-imagen'
                    className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[42px] w-[224px] text-[36px] cursor-pointer text-center flex items-center justify-center'>
                    Subir logo
                </label>
                <p>{selectedFile ? selectedFile.name : ''}</p>
                {filePreview && (
                    <div className="flex items-center">
                        <img src={filePreview} alt="Preview" className="h-16 w-16 object-cover" />
                    </div>
                )}
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
