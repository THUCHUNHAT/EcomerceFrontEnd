import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import PetProductDetail from "./pages/PetProductDetail";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess"
import Tracking from "./pages/Tracking";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/PetProductDetail" element={<PetProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/OrderSuccess" element={<OrderSuccess/>} />
        <Route path ="/Tracking" element={<Tracking/>}/>
      </Routes>
    </Router>
  );
};

export default App;
