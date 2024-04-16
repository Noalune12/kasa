import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Error404 from './pages/404';
import Annonce from './pages/Annonce';
import APropos from './pages/A-propos';
import './style.scss';

document.title = "Kasa";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router basename="/kasa">
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/annonce/:annonceId" element={<Annonce />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);