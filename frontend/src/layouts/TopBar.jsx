import logo1 from '../assets/logos/logo1.svg';

const TopBar = () => {

    return (
        <div className="relative flex flex-col">
            <img src={logo1} alt='logo1' className='m-auto h-[142px] w-[208px] min-w-[208px] min-h-[142px]' />
            <div className="bg-[#FF7C58] px-4 py-[20px] flex  items-center"></div>
        </div>
    );
};

export default TopBar;
