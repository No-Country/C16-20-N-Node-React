import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import RestauranteDashboard from '../pages/RestauranteDashboard';
import RegisterRestaurant from '../pages/restaurant/registerRestaurant';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* pagina de inicio */}
        <Route exact path="/" element={<HomePage />} />
        {/* pagina de registro del restaurante*/}
        <Route path="/registerRestaurant" element={<RegisterRestaurant />} />
        {/* pagina del tablero del restaurante */}
        <Route path="/RestauranteDashboard" element={<RestauranteDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;