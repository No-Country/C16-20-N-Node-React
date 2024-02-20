import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import RegisterRestaurant from '../pages/restaurant/registerRestaurant';
import DashboardRestaurant from '../layouts/dashboardRestaurant';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* pagina de inicio */}
        <Route exact path="/" element={<HomePage />} />
        {/* pagina de registro del restaurante*/}
        <Route path="/registerRestaurant" element={<RegisterRestaurant />} />
        {/* pagina del tablero del restaurante */}
        <Route path="/dashboardRestaurant" element={<DashboardRestaurant />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;