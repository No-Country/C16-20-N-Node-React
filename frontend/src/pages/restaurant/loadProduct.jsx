import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon38 from '../../assets/icon38.svg'

const LoadProduct = () => {
    const [nombrePlato, setNombrePlato] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tiempoEspera, setTiempoEspera] = useState('');
    const [redirect, setRedirect] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nombrePlato: nombrePlato,
            descripcion: descripcion,
            precio: precio,
            tiempoEspera: tiempoEspera,
        };
        console.log('solicitud de registro enviado!')
        console.log('Datos que se envian:', formData);
        setRedirect('/dashboardRestaurant');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        // Crear una URL de vista previa para la imagen seleccionada
        setFilePreview(URL.createObjectURL(file));
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>
            {redirect && <Navigate to={redirect} />}
            <form
                onSubmit={handleSubmit}
                className='w-[544px] h-full my-[15px]'>
                <div
                    className='flex flex-col'>
                    <input
                        type='text'
                        id='nombre-plato'
                        value={nombrePlato}
                        placeholder='Nombre del plato:'
                        onChange={(e) => setNombrePlato(e.target.value)}
                        className='text-[16px] placeholder-[#737373] text-black rounded-[30px] border border-[#575757] w-full h-[42px] px-[18px]'
                    />
                    <textarea
                        type='text'
                        id='descripcion'
                        value={descripcion}
                        placeholder='Descripción:'
                        onChange={(e) => setDescripcion(e.target.value)}
                        className='mt-[30px] text-[16px] placeholder-[#737373] text-black rounded-[30px] border-[1px] border-[#575757] w-full h-[114px] px-[18px] pt-[8px]'
                    />
                    <input
                        type='text'
                        id='precio'
                        value={precio}
                        placeholder='Precio:'
                        onChange={(e) => setPrecio(e.target.value)}
                        className=' mt-[30px] text-[16px] placeholder-[#737373] text-black rounded-[30px] border border-[#575757] w-full h-[42px] px-[18px]'
                    />
                    <input
                        type='text'
                        id='tiempo-espera'
                        value={tiempoEspera}
                        placeholder='Tiempo de espera:'
                        onChange={(e) => setTiempoEspera(e.target.value)}
                        className='mt-[30px] text-[16px] placeholder-[#737373] text-black rounded-[30px] border border-[#575757] w-full h-[42px] px-[18px]'
                    />
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
                                    src={icon38}
                                    alt='image12'
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
                </div>
                <div className='flex items-center justify-center mt-[94px]'>
                    <button
                        type='submit'
                        className='bg-[#00A896] border border-[#575757] rounded-[20px] h-[60px] w-[352px] text-[36px]'>
                        Aceptar
                    </button>
                </div>
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
                            {/* Mostrar la imagen seleccionada a tamaño completo */}
                            <img src={filePreview} alt="Preview" className="max-w-full max-h-full" />
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default LoadProduct;

