import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import RegisterRestaurant from '../pages/restaurant/registerRestaurant';
import DashboardRestaurant from '../layouts/dashboardRestaurant';
import LoadProduct from '../pages/restaurant/loadProduct';

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
        {/* pagina del tablero del restaurante */}
        <Route path="/loadProduct" element={<LoadProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;