import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Footer from "./footer";
import Apropos from "../pages/Apropos";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
      
      </Routes>

        <Footer/>
    </BrowserRouter>
    
  );
};

export default App;

//creer un router//