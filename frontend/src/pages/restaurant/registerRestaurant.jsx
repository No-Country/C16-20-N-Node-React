import { useState } from 'react';

const RegisterRestaurant = () => {

    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [rubro, setRubro] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nombre: nombre,
            direccion: direccion,
            rubro: rubro,
            telefono: telefono
        };
        console.log('solicitud de registro enviado!')
        console.log('Datos que se envian:', formData);
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
                            flex flex-col gap-7
                        '>
                        <input
                            type='text'
                            id='nombre'
                            value={nombre}
                            placeholder='Nombre'
                            onChange={(e) => setNombre(e.target.value)}
                            className='font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4'
                        />
                        <input
                            type='text'
                            id='direccion'
                            value={direccion}
                            placeholder='Dirección'
                            onChange={(e) => setDireccion(e.target.value)}
                            className='font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4'
                        />
                        <input
                            type='text'
                            id='rubro'
                            value={rubro}
                            placeholder='Rubro'
                            onChange={(e) => setRubro(e.target.value)}
                            className='font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4'
                        />
                        <input
                            type='text'
                            id='telefono'
                            value={telefono}
                            placeholder='Telefono'
                            onChange={(e) => setTelefono(e.target.value)}
                            className='font-[roboto] text-[16px] placeholder-[#737373] text-black rounded-[50px] border-[1px] border-[#575757] w-full h-[42px] px-4'
                        />
                    </div>
                    <div className='flex items-center justify-center mt-[120px]'>
                        <button
                            type='submit'
                            className='
                                font-[roboto] bg-[#00A896] border-[1px] border-[#575757] rounded-[20px] h-[82px] w-[352px] text-[36px]
                            '>
                            Regístrate
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegisterRestaurant;

