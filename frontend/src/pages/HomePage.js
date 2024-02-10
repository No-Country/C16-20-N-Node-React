import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Cliente */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex justify-center items-center text-center p-8">
                    <div className="bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: 'url(cliente.jpg)' }}></div>
                    <div className="my-8">
                        <Link to="/cliente" className="bg-blue-600 text-white py-4 px-8 rounded-md hover:bg-blue-600">Ir a Cliente</Link>
                    </div>
                </div>
                {/* Restaurante */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex justify-center items-center text-center p-8">
                    <div className="bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: 'url(restaurante.jpg)' }}></div>
                    <div className="my-8">
                        <Link to="/restaurante" className="bg-blue-600 text-white py-4 px-8 rounded-md hover:bg-blue-600">Ir a Restaurante</Link>
                    </div>
                </div>
                {/* Repartidor */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex justify-center items-center text-center p-8">
                    <div className="bg-cover bg-center h-40 md:h-64" style={{ backgroundImage: 'url(repartidor.jpg)' }}></div>
                    <div className="my-8">
                        <Link to="/repartidor" className="bg-blue-600 text-white py-4 px-8 rounded-md hover:bg-blue-600">Ir a Repartidor</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
