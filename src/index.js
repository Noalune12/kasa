import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Error404 from './pages/404';
import Logement from './pages/Logement';
import APropos from './pages/A-propos';
import './style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/a-propos" element={<APropos/>} />
        <Route path="/logement" element={<Logement/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

