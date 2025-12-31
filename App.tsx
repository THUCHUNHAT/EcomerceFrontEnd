import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import PetProductDetail from "./pages/PetProductDetail";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";
import Tracking from "./pages/Tracking";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import ForgotPassword from "./pages/auth/ForgotPassword";
import CheckEmail from"./pages/auth/CheckEmail";
import SetNewPassword from "./pages/auth/SetNewPassword";
import PasswordSetSuccessful from "./pages/auth/PasswordSetSuccessful";
import Checkout from "./pages/Checkout";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/PetProductDetail" element={<PetProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/OrderSuccess" element={<OrderSuccess />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/CheckEmail" element={<CheckEmail/>}/>
          <Route path="/SetNewPassword" element={<SetNewPassword/>}/>
          <Route path="/PasswordSetSuccessful" element={<PasswordSetSuccessful/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
