import { Link } from 'react-router-dom';

const SelectionUser = () => {
    return (
        <div className="flex min-w-max">
            {/* Cliente */}
            <div className="mx-8">
                <Link to="/ClienteDashboard" className="bg-color2 py-4 px-8">Ir a Cliente</Link>
            </div>
            {/* Restaurante */}
            <div className="mx-8">
                <Link to="/RestauranteDashboard" className="bg-color2 py-4 px-8">Ir a Restaurante</Link>
            </div>
            {/* Repartidor */}
            <div className="mx-8">
                <Link to="/RepartidorDashboard" className="bg-color2 py-4 px-8">Ir a Repartidor</Link>
            </div>
        </div>
    );
}

export default SelectionUser;