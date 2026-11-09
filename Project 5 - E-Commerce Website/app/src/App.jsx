import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import productsData from "./data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";

import "./App.css";

function App() {
  const [products, setProducts] = useState(productsData);

  // Delete Product
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    setProducts(updatedProducts);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home products={productsData.slice(0, 3)} />}/>
        <Route path="/products" element={<Products products={products} onDelete={deleteProduct} />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
