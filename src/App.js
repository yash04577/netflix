import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
