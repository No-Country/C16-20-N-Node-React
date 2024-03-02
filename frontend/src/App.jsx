import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageProfileRestaurant from './pages/restaurant/ManageProfileRestaurant';
import ProductUploadFormRestaurant from './pages/restaurant/ProductUploadFormRestaurant';
import ManageProductsCustomer from './pages/custormer/ManageProductsCustomer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pagina inicio */}
        <Route path="/" element={<ManageProductsCustomer />} />
        {/* Restaurante */}
        <Route path="restaurante/pefil" element={<ManageProfileRestaurant />} />
        <Route path="restaurante/cargar-producto" element={<ProductUploadFormRestaurant />} />
        {/* Cliente */}
        <Route path='cliente/productos' element={<ManageProductsCustomer />} />
        {/* Repartidor */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;