import { useState } from 'react';
import icon38 from '../../assets/icon38.svg'

const LoadProduct = () => {
    const [nombrePlato, setNombrePlato] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tiempoEspera, setTiempoEspera] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            precio: precio,
        };
        console.log('solicitud de registro enviado!')
        console.log('Datos que se envian:', formData);

    };

    const handleImagenSeleccionada = (e) => {
        const imagenSeleccionada = e.target.files[0];
        setImagen(imagenSeleccionada);
    };

    return (
        <div
            className='
                flex h-screen w-screen bg-white items-center justify-center
            '>
            <div className='
                    w-[544px]
                '>
                <form
                    onSubmit={handleSubmit}
                    className=''>
                    <div
                        className='
                            flex flex-col
                        '>
                        <input
                            type='text'
                            id='nombre-plato'
                            value={nombrePlato}
                            placeholder='Nombre del plato:'
                            onChange={(e) => setNombrePlato(e.target.value)}
                            className='font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4'
                        />
                        <textarea
                            type='text'
                            id='descripcion'
                            value={descripcion}
                            placeholder='Descripción:'
                            onChange={(e) => setDescripcion(e.target.value)}
                            className='mt-[30px] font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[30px] border-[1px] border-[#575757] w-full h-[144px] px-4 pt-[11px]'
                        />
                        <input
                            type='text'
                            id='precio'
                            value={precio}
                            placeholder='Precio:'
                            onChange={(e) => setPrecio(e.target.value)}
                            className='mt-[30px] font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4 '
                        />
                        <input
                            type='text'
                            id='tiempo-espera'
                            value={tiempoEspera}
                            placeholder='Tiempo de espera::'
                            onChange={(e) => setTiempoEspera(e.target.value)}
                            className='mt-[30px] font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4 '
                        />
                        <input
                            type='file'
                            id='subir-imagen'
                            onChange={handleImagenSeleccionada}
                            style={{ display: 'none' }}
                        />
                        <div className='mt-[30px] rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] flex items-center pl-[10px]'>

                            <label htmlFor='subir-imagen' className='font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[8px] bg-[#00A896] h-[30px] w-[130px] flex items-center'>
                                <span><img
                                    src={icon38}
                                    alt='image12'
                                    className='
                                h-[14px] w-[16px] object-cover ml-[8px] mr-[8px]
                                '
                                >
                                </img></span>    Subir imagen
                            </label>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-[120px]'>
                        <button
                            type='submit'
                            className='
                                font-[roboto] bg-[#00A896] border-[1px] border-[#575757] rounded-[20px] h-[60px] w-[351px] text-[36px]
                            '>
                            Regístrate
                        </button>
                    </div>
                    {imagen && (
                        <div>
                            <img src={URL.createObjectURL(imagen)} alt='Imagen seleccionada' style={{ maxWidth: '100%', marginTop: '10px' }} />
                        </div>
                    )}
                </form>
            </div >
        </div >
    )
}

export default LoadProduct;

