import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import LandingPage from './components/LandingPage';
import FindWork from './Pages/FindWork';

function App() {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/signup' && location.pathname !== '/login';
  return (
    <div className="App">
        {shouldShowNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
