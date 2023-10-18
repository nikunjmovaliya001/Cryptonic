import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Section from './Section/Section';
import Info from './Section/Info';
import Footer from './Footer/Footer';
import Aboutus from './AboutUs/Aboutus';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register_Login/Register';






function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>

      <Section />
      <Info />
      <Footer />
      {/* <Register/> */}
    </BrowserRouter>

  );
}

export default App;
