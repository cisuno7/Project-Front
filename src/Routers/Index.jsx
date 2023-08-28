import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioPage from '../Screens/Formulario/Index';
import LoginPage from '../Screens/Login/Index';
import HomePage from '../Screens/Home/Index';
import TabelaPage from '../Screens/Tabela/Index'
function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Formulario" element={<FormularioPage />} />
          <Route path="/Tabela" element={<TabelaPage />} />
        </Routes>
      </Router>
    </div>
  );
}  

export default App;
