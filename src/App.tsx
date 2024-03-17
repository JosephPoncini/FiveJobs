import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import HomePageComponent from './components/Pages/HomePage/HomePageComponent';
import NintendoPageComponent from './components/Pages/NintendoPage/NintendoPageComponent';
import GooglePageComponent from './components/Pages/GooglePage/GooglePageComponent';
import SpaceXPageComponent from './components/Pages/SpaceXPage/SpaceXPageComponent';
import NvidiaPageComponent from './components/Pages/NvidiaPage/NvidiaPageComponent';
import NasaPageComponent from './components/Pages/NASAPage/NasaPageComponent';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/Nintendo" element={<NintendoPageComponent/>} />
          <Route path="/Google" element={<GooglePageComponent/>} />
          <Route path="/SpaceX" element={<SpaceXPageComponent/>} />
          <Route path="/Nvidia" element={<NvidiaPageComponent/>} />
          <Route path="/NASA" element={<NasaPageComponent/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
