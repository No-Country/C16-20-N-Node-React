import image12 from '../assets/image12.svg'
import icon34 from '../assets/icon34.svg'
import icon35 from '../assets/icon35.svg'
import icon36 from '../assets/icon36.svg'
import { useState } from 'react';
import PerfilRestaurant from '../pages/restaurant/perfilRestaurant'
import ManageProducts from '../pages/restaurant/manageProducts'

const DashboardRestaurant = () => {
    const [selectedButton, setSelectedButton] = useState('Perfil');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div
            className='
                flex flex-col w-full
            '>
            <div
                className='
                    pl-[120px] py-[12px]
                '>
                <img
                    src={image12}
                    alt='image12'
                    className='
                        h-[142px] w-[208px] min-w-[208px]
                    '/>
            </div>
            <div
                className='
                    flex min-h-[72px] w-full bg-[#FF5733] items-center min-w-[1100px]
                '>
                {selectedButton === 'Platos' &&
                    <div className='flex w-full ml-[310px]'>
                        <tr className=''>
                            <td className=' w-[180px] min-w-[180px] text-center'>Nombre</td>
                            <td className=' w-[270px] min-w-[270px] text-center'>Descripción</td>
                            <td className=' w-[110px] min-w-[110px] text-center'>Precio</td>
                            <td className=' w-[160px] min-w-[160px] text-center'>Tiempo de espera</td>
                        </tr>
                    </div>}
            </div>
            <div
                className='
                    flex flex-row h-screen w-full
                '>
                <div
                    className='
                    flex flex-col min-w-[256px] w-[256px] h-full bg-[#FF5733]
                '>
                    <button
                        onClick={() => handleButtonClick('Platos')}
                        className={
                            `flex w-full h-[84px] items-center border border-[#575757] border-l-[#FF5733]
                        ${selectedButton === 'Platos' ? 'bg-[#00A896] border-black border-[2px]' : ''}
                        `
                        }>
                        <p
                            className='
                            w-full text-[16px] font-[roboto] 
                        '>
                            Platos
                        </p>
                        <img
                            src={icon34}
                            alt='icon34'
                            className='
                            w-[33px] h-[41px] mr-[40px]
                        '/>
                    </button>
                    <button
                        onClick={() => handleButtonClick('Pedidos')}
                        className={
                            `flex w-full h-[84px] items-center border border-[#575757] border-l-[#FF5733] 
                        ${selectedButton === 'Pedidos' ? 'bg-[#00A896] border-t-black border-black border-[2px]' : 'border-t-0 '} 
                        `
                        }>
                        <p
                            className='
                            w-full text-[16px] font-[roboto] 
                        '>
                            Pedidos
                        </p>
                        <img
                            src={icon35}
                            alt='icon35'
                            className='
                            w-[38px] h-[41px] mr-[40px]
                        '/>
                    </button>
                    <button
                        onClick={() => handleButtonClick('Perfil')}
                        className={
                            `flex w-full h-[84px] items-center border border-[#575757] border-l-[#FF5733]
                        ${selectedButton === 'Perfil' ? 'bg-[#00A896] border-t-black border-black border-[2px]' : 'border-t-0 '}                        
                        `
                        }>
                        <p
                            className='
                            w-full text-[16px] font-[roboto] 
                        '>
                            Perfil
                        </p>
                        <img
                            src={icon36}
                            alt='icon36'
                            className='
                            w-[50px] h-[48px] mr-[35px] ml-[5px] 
                        '/>
                    </button>
                </div>
                <div>
                    {selectedButton === 'Perfil' && <PerfilRestaurant />}
                    {selectedButton === 'Platos' && <ManageProducts />}
                </div>
            </div>
        </div>

    )
}

export default DashboardRestaurant;