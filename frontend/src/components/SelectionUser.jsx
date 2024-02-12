import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-color1">
            <div className="flex min-w-max">
                {/* Cliente */}
                <div className="mx-8">
                    <Link to="/cliente" className="bg-color2 py-4 px-8">Ir a Cliente</Link>
                </div>
                {/* Restaurante */}
                <div className="mx-8">
                    <Link to="/restaurante" className="bg-color2 py-4 px-8">Ir a Restaurante</Link>
                </div>
                {/* Repartidor */}
                <div className="mx-8">
                    <Link to="/repartidor" className="bg-color2 py-4 px-8">Ir a Repartidor</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;