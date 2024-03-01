import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './pages/access/loginForm';
import RegisterForm from './pages/access/registerForm';
import RegisterFormRestaurant from './pages/access/registerFormRestaurant';
import DashboardRestaurant from './layouts/dashboardRestaurant';
import ProductUploadForm from './pages/restaurant/productUploadForm';
import ProfileUpdateForm from './pages/restaurant/profileUpdateForm';

const App = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentSession');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentSession', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentSession');
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* página de inicio */}
        <Route exact path="/" element={<LoginForm setCurrentUser={handleLogin} />} />
        {/* página de registro */}
        <Route path="/registerform" element={<RegisterForm />} />
        {/* página de registro del restaurante */}
        <Route path="/registerFormRestaurant" element={<RegisterFormRestaurant />} />
        {/* página del tablero del restaurante */}
        <Route path="/dashboardRestaurant" element={<DashboardRestaurant currentUser={currentUser} onLogout={handleLogout} />} />
        {/* pagina del tablero del restaurante */}
        <Route path="/loadProduct" element={<ProductUploadForm />} />
        {/* pagina actualizar registro del restaurante*/}
        <Route path="/profileUpdateForm" element={<ProfileUpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
