import image13 from '../../assets/image13.jpeg';
import image14 from '../../assets/image14.svg';
import icon37 from '../../assets/icon37.svg'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PerfilRestaurant = () => {
    const [redirect, setRedirect] = useState(null);
    const images = Array.from({ length: 9 }, (_, index) => index + 1);

    const handleRedirect = () => {
        setRedirect('/loadProduct');
    };

    return (
        <div className='flex flex-col w-full h-fit ml-[64px] mt-[47px] min-w-[960px] h-[686px]'>
            {redirect && <Navigate to={redirect} />}
            <div className='flex flex-row justify-between w-[960px] h-[200px]'>
                <div className='pt-[27px] pl-[31px] flex w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <div className='flex flex-col h-[145px] w-[105px] items-end'>
                        <img
                            src={image14}
                            alt='Image14'
                            className='w-[105px] h-[109px] object-cover'
                        />
                        <img
                            src={icon37}
                            alt='icon37'
                            className='w-[26px] h-[26px] object-cover'
                        />
                    </div>
                    <div className='w-[266px] h-[145px]'>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[449px] h-[200px] border border-[#575757] rounded-[20px]'>
                    <div className='w-[224px] h-[120px]'>
                        <p className='mb-[22px] text-[24px] text-center'>Administra tu carta</p>
                        <button
                            onClick={handleRedirect}
                            className='
                                font-[roboto] bg-[#00A896] border-[1px] border-[#575757] rounded-[20px] h-[70px] w-full text-[36px]
                            '>
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[960px] h-[450px] mt-[36px]'>
                <div className='flex flex-wrap justify-between'>
                    {images.map((index) => (
                        <img
                            key={index}
                            src={image13}
                            alt={`Image ${index}`}
                            className='w-[256px] h-[120px] mb-[34px] object-cover rounded-[15px] border boder-[#1CC47D]'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PerfilRestaurant;