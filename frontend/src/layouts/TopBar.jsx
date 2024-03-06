import logo1 from '../assets/logos/logo1.svg';

const TopBar = () => {

    return (
        <div className="flex flex-col">
            <img src={logo1} alt='logo1' className='m-auto py-2 sm:ml-7 w-[150px] min-w-[80px]' />
            <div className="bg-[#FF7C58] py-[8px]"></div>
        </div>
    );
};

export default TopBar;
