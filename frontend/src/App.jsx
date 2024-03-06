import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ManageProfileRestaurant from './pages/restaurant/ManageProfileRestaurant';
import ProductUploadFormRestaurant from './pages/restaurant/ProductUploadFormRestaurant';
import ManageProductsCustomer from './pages/custormer/ManageProductsCustomer'
import RegisterForm from './pages/access/RegisterForm';
import RegisterProfileRestaurant from './pages/access/RegisterProfileRestaurant';
import LoginForm from './pages/access/LoginForm';
import ManageProductsRestaurant from './pages/restaurant/ManageProductsRestaurant';
import ProfileUpdateFormRestaurant from './pages/restaurant/ProfileUpdateFormRestaurant';
import ManageOrdersRestaurant from './pages/restaurant/ManageOrdersRestaurant';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pagina inicio */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/restaurante/registro" element={<RegisterProfileRestaurant />} />
        {/* Restaurante */}
        <Route path="/restaurante/perfil" element={<ManageProfileRestaurant />} />
        <Route path="/restaurante/cargar-producto" element={<ProductUploadFormRestaurant />} />
        <Route path="/restaurante/platos" element={<ManageProductsRestaurant />} />
        <Route path="/restaurante/actualizar-perfil" element={<ProfileUpdateFormRestaurant />} />
        <Route path="/restaurante/pedidos" element={<ManageOrdersRestaurant />} />
        {/* Cliente */}
        <Route path='/cliente/productos' element={<ManageProductsCustomer />} />
        {/* Repartidor */}
      </Routes>
    </Router>
  )
}

export default App;
