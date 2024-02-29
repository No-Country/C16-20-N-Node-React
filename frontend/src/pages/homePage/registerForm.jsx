import { useState } from 'react';
import icon33 from '../../assets/icon33.svg';
import imagen12 from '../../assets/image12.svg';
import RegisterRestaurant from '../restaurant/registerRestaurant';

const RegisterForm = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [rol_usuario, setRole] = useState('');
    const [redirect, setRedirect] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const options = ['cliente', 'repartidor', 'restaurant'];
    const formData = { mail: mail, password: password, rol_usuario: rol_usuario };

    const handleSubmitRegister = async (event) => {
        event.preventDefault();
        setRedirect('/registerRestaurant');
    };

    const handleRole = (usuario) => {
        setRole(usuario);
        setShowOptions(false);
    };

    return (
        <div className='flex min-h-screen min-w-[360px] bg-white items-center justify-center'>

            <div className='flex flex-col w-[400px] h-full min-w-[400px] min-h-full my-[15px]'>
                {redirect && <RegisterRestaurant formData={formData} />}
                <img src={imagen12} alt='imagen12' className='w-full h-[242px] min-h-[242px] object-cover mb-[10px]' />
                <form onSubmit={handleSubmitRegister} className='flex flex-col w-full text-center h-full px-[22px]'>
                    <input
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px] mb-[16px]'
                    />
                    <input
                        type='password'
                        id='contraseña'
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='text-[16px] placeholder-black text-black rounded-[30px] border border-[#453A32] shadow-xl w-full h-[42px] px-[17px]'
                    />
                    <div className='relative mt-[30px]'>
                        <div onClick={() => setShowOptions(!showOptions)} className='border border-[#453A32] rounded-[30px] shadow-xl w-full h-[42px] px-[17px] flex items-center justify-between cursor-pointer'>
                            <span>{rol_usuario || 'Selecciona un usuario'}</span>
                            <img
                                src={icon33}
                                alt='icon'
                                className='w-[16px] h-[10px] mr-[15px] object-cover' />
                        </div>
                        {showOptions && (
                            <div className='absolute bg-white border border-[#453A32] rounded-[20px] w-full mt-[8px]'>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className='text-left px-[22px] py-[8px] h-[35px] cursor-pointer'
                                        onClick={() => handleRole(option)}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        type='submit'
                        className='bg-[#00A896] border border-[#453A32] rounded-[20px] text-[36px] shadow-xl mt-[30px] w-full h-[60px]'>
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
