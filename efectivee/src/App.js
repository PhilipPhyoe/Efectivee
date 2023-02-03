import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from "./Components/Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
