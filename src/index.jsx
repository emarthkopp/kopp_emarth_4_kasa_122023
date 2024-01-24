import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from "./App"
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Home from "./components/Home";
import AccomodationDetail from "./components/AccomodationDetail"; 


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/accommodation/:id" element={<AccomodationDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


