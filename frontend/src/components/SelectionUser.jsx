import { Link } from 'react-router-dom';

const SelectionUser = () => {
    return (
        <div className="sm:flex sm:flex-wrap sm:flex-nowrap justify-center">
            {/* Cliente */}
            <div className="mx-8 my-4">
                <Link to="/ClienteDashboard" className="bg-color2 py-4 px-8 block my-4">Ir a Cliente</Link>
            </div>
            {/* Restaurante */}
            <div className="mx-8 my-4">
                <Link to="/RestauranteDashboard" className="bg-color2 py-4 px-8 block my-4">Ir a Restaurante</Link>
            </div>
            {/* Repartidor */}
            <div className="mx-8 my-4">
                <Link to="/RepartidorDashboard" className="bg-color2 py-4 px-8 block my-4">Ir a Repartidor</Link>
            </div>
        </div>
    );
}

export default SelectionUser;
