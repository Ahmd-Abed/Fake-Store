import {Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import CartProduct from "./Components/CartProduct";
import CustomAlert from "./Components/CustomAlert";
function App() {

  const [cart, setCart] = useState([]); 

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false)

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    const titleWords = product.title.split(' ');
    const shortTitle = titleWords.slice(0, 3).join(' ');
    setAlertMessage(`${shortTitle} added to cart`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    setAlertMessage(`Product removed from cart`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div className="App">

        <div className="navbar-fixed">
          <NavBar cartCount={cart.length} cartItems={cart} />
        </div>
        <CustomAlert message={alertMessage} show={showAlert} onClose={handleCloseAlert} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart}/>} />
          <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartProduct cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />} />
        </Routes>

    </div>
  );
}

export default App;
