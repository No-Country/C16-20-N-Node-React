import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterRestaurant from '../pages/restaurant/registerRestaurant';
import DashboardRestaurant from '../layouts/dashboardRestaurant';
import LoadProduct from '../pages/restaurant/loadProduct';
import LoginForm from '../pages/homePage/loginForm';
import RegisterForm from '../pages/homePage/registerForm';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* pagina de inicio */}
        <Route exact path="/" element={<LoginForm />} />
        {/* pagina de registro*/}
        <Route path="/registerForm" element={<RegisterForm />} />
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