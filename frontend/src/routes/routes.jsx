import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import ClienteDashboard from '../pages/ClienteDashboard';
import RestauranteDashboard from '../pages/RestauranteDashboard';
import RepartidorDashboard from '../pages/RepartidorDashboard';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* pagina de inicio */}
        <Route exact path="/" element={<HomePage />} />
        {/* pagina de registro */}

        {/* pagina del tablero del restaurante */}
        <Route path="/RestauranteDashboard" element={<RestauranteDashboard />} />
        {/* pagina del tablero del cliente */}
        <Route path="/ClienteDashboard" element={<ClienteDashboard />} />
        {/* pagina del tablero del repartidor */}
        <Route path="/RepartidorDashboard" element={<RepartidorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;