import React from 'react';
import HeroSection from './assets/components/HeroSection';
import Categories from './assets/components/Categories';
import AboutUs from './assets/components/AboutUs';
import Footer from './assets/components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import ProductsPage from './assets/components/ProductsPage';
import './App.css';

function App() {
  return (
    <Router>
      {/* This will be displayed on all pages */}
      
      
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<><HeroSection /> ,<Categories/> , <AboutUs/>,<Footer /> </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shopnow" element={<ProductsPage/>} />


        
      </Routes>
      
      {/* This will be displayed on all pages */}
      
    </Router>
  );
}

export default App;
