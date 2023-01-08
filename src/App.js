import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoviesState from "./context/MovieState";
import SinglePage from "./pages/SinglePage";

const App = () => {

  const ch = "check";

  return (
    <BrowserRouter>
      <MoviesState>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/singlepage" element={<SinglePage></SinglePage>}></Route>
        </Routes>
        <Footer></Footer>
      </MoviesState>
    </BrowserRouter>
  );
};

export default App;
