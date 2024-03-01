import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/access/loginForm';
import RegisterForm from './pages/access/registerForm';
import RegisterFormRestaurant from './pages/access/registerFormRestaurant';
import DashboardRestaurant from './layouts/dashboardRestaurant';
import ProductUploadForm from './pages/restaurant/productUploadForm';
import ProfileUpdateForm from './pages/restaurant/profileUpdateForm';
import ManageProducts from './pages/restaurant/manageProducts';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedLoggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/registerFormRestaurant" element={<RegisterFormRestaurant />} />
        {isLoggedIn ? (
          <>
            <Route path="/dashboardRestaurant" element={<DashboardRestaurant onLogout={handleLogout} />} />
            <Route path="/productUploadForm" element={<ProductUploadForm />} />
            <Route path="/profileUpdateForm" element={<ProfileUpdateForm />} />
            <Route path="/manageProducts" element={<ManageProducts />} />
          </>
        ) : (
          <Route path="*" element={<LoginForm onLogin={handleLogin} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
