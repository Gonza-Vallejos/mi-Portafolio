import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';
import SobreMi from './pages/sobremi';
import './App.css';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobremi" element={<SobreMi />} />

      </Routes>
    </Router>
  );
}

export default App;
