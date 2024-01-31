import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Home from "./components/Home";
import AccomodationDetail from "./components/AccomodationDetail"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
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
  );
}

export default App;
