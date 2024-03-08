import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon5 from '../../assets/icons/icon5.svg';

const RegisterProfileRestaurant = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!selectedFile) {
            setErrorMessage('Por favor, sube una imagen para tu perfil.');
            return;
        }
    
        const storedUserCurrent = JSON.parse(sessionStorage.getItem('UserCurrentLogin')) || {};
    
        const fileName = selectedFile.name; // Obtener el nombre del archivo
        const fileExtension = fileName.split('.').pop(); // Obtener la extensión del archivo
    
        const formData = new FormData();
        formData.append('mail', storedUserCurrent.mail);
        formData.append('password', storedUserCurrent.password);
        formData.append('rol_usuario', storedUserCurrent.rol_usuario);
        formData.append('nombre_restaurant', name);
        formData.append('direccion_restaurant', address);
        formData.append('telefono_restaurant', phone);
        formData.append('rubro_restaurant', category);
        formData.append('logo', `${fileName}.${fileExtension}`); // Enviar solo nombre y extensión del archivo
    
        try {
            const response = await fetch('https://vaya-pronto.onrender.com/usuario/registro', {
                method: 'POST',
                body: formData
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setRedirect('/');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || 'Error en el registro.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            setErrorMessage('Error en la solicitud.');
        }
    };
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='flex min-h-screen min-w-[544px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
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
                <div className='mt-[30px] rounded-[30px] border border-[#575757] w-full h-[42px] flex items-center pl-[10px]'>
                    <label
                        htmlFor='subir-imagen'
                        className='text-[16px] placeholder-[#737373] text-black rounded-[8px] border border-[#575757] bg-[#00A896] h-[27px] w-[135px] flex items-center'>
                        <span>
                            <img
                                src={icon5}
                                alt='icon5'
                                className='h-[14px] w-[16px] object-cover ml-[8px] mr-[8px]'
                            >
                            </img>
                        </span>
                        Subir imágen
                    </label>
                    <p className='ml-[20px]'>{selectedFile ? selectedFile.name : ''}</p>
                    {filePreview && (
                        <div className="flex items-center ml-auto mr-[20px]">
                            <img src={filePreview} onClick={openModal} alt="Preview" className="h-8 w-8 object-cover" />
                        </div>
                    )}
                </div>
                <button
                    type='submit'
                    className='bg-[#00A896] border border-[#453A32] rounded-[20px] mt-[60px] h-[60px] w-[351px] text-[36px]'>
                    Regístrate
                </button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </form>
            {showModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        {/* Contenido de la ventana modal */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Vista previa</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <img src={filePreview} alt="Preview" className="max-w-full max-h-full" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterProfileRestaurant;
