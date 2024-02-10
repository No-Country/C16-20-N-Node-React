import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserOptionsPage from './pages/UserOptionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cliente" element={<UserOptionsPage userType="cliente" />} />
        <Route path="/restaurante" element={<UserOptionsPage userType="restaurante" />} />
        <Route path="/repartidor" element={<UserOptionsPage userType="repartidor" />} />
      </Routes>
    </Router>
  );
}

export default App;
