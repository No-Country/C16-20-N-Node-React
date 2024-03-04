import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageProfileRestaurant from './pages/restaurant/ManageProfileRestaurant';
import ProductUploadFormRestaurant from './pages/restaurant/ProductUploadFormRestaurant';
import ManageProductsCustomer from './pages/custormer/ManageProductsCustomer'
import RegisterForm from './pages/access/RegisterForm';
import RegisterProfileRestaurant from './pages/access/RegisterProfileRestaurant';
import LoginForm from './pages/access/LoginForm';
import ManageProductsRestaurant from './pages/restaurant/ManageProductsRestaurant';
import ProfileUpdateFormRestaurant from './pages/restaurant/ProfileUpdateFormRestaurant';

const App = () => {
  return (
    <BrowserRouter>
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
        {/* Cliente */}
        <Route path='/cliente/productos' element={<ManageProductsCustomer />} />
        {/* Repartidor */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;