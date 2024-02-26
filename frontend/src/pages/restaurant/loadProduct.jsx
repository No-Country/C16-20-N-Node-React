import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import icon38 from '../../assets/icon38.svg'

const LoadProduct = () => {
    const [nombrePlato, setNombrePlato] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tiempoEspera, setTiempoEspera] = useState('');
    const [redirect, setRedirect] = useState(null);

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
        </div >
    )
}

export default LoadProduct;

