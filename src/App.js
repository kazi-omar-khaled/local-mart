import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Routes, Route } from 'react-router-dom';
import Products from "./Component/Products";
import Product from "./Component/Product";
import Contact from "./Component/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
