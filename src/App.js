import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import About from './Components/About';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
