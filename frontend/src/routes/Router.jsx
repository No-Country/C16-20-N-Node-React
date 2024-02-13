import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioPage from '../pages/InicioPage';
import ClienteDashboard from '../pages/ClienteDashboard';
import RestauranteDashboard from '../pages/RestauranteDashboard';
import RepartidorDashboard from '../pages/RepartidorDashboard';
import RegisterForm from '../components/RegisterForm';

const Router = () => {
  const [clienteRegistrado, setClienteRegistrado] = useState(false);
  const [restauranteRegistrado, setRestauranteRegistrado] = useState(false);
  const [repartidorRegistrado, setRepartidorRegistrado] = useState(false);

  const handleRegistroCompletado = (tipoUsuario) => {
    switch (tipoUsuario) {
      case 'cliente':
        setClienteRegistrado(true);
        break;
      case 'restaurante':
        setRestauranteRegistrado(true);
        break;
      case 'repartidor':
        setRepartidorRegistrado(true);
        break;
      default:
        break;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<InicioPage />} />

        {/* Cliente Dashboard */}
        <Route
          path="/ClienteDashboard"
          element={
            clienteRegistrado ? (
              <ClienteDashboard />
            ) : (
              <RegisterForm
                tipoUsuario="cliente"
                onRegistroCompletado={handleRegistroCompletado}
              />
            )
          }
        />

        {/* Restaurante Dashboard */}
        <Route
          path="/RestauranteDashboard"
          element={
            restauranteRegistrado ? (
              <RestauranteDashboard />
            ) : (
              <RegisterForm
                tipoUsuario="restaurante"
                onRegistroCompletado={handleRegistroCompletado}
              />
            )
          }
        />

        {/* Repartidor Dashboard */}
        <Route
          path="/RepartidorDashboard"
          element={
            repartidorRegistrado ? (
              <RepartidorDashboard />
            ) : (
              <RegisterForm
                tipoUsuario="repartidor"
                onRegistroCompletado={handleRegistroCompletado}
              />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
