import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import ContactScreen from "./components/screens/ContactScreen/ContactScreen";
import AboutScreen from "./components/screens/AboutScreen";
import FAQScreen from "./components/screens/FAQScreen";
import PrivacyScreen from "./components/screens/PolicyScreens/PrivacyScreen";
import FinerDetailsScreen from "./components/screens/PolicyScreens/FinerDetailsScreen";
import CartScreen from "./components/screens/StoreScreens/CartScreen";
import DeliveryPolicyScreen from "./components/screens/PolicyScreens/DeliveryPolicyScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ProductScreen from "./components/screens/StoreScreens/ProductScreen";
import StoreScreen from "./components/screens/StoreScreens/StoreScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import ShippingScreen from "./components/screens/ShippingScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen";
import OrderScreen from "./components/screens/OrderScreen";
import UserListScreen from "./components/screens/UserListScreen";
import UserEditScreen from "./components/screens/UserEditScreen";
import ProductListScreen from "./components/screens/ProductListScreen";
import ProductEditScreen from "./components/screens/ProductEditScreen";
import OrderListScreen from "./components/screens/OrderListScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/About" element={<AboutScreen />} />
        <Route path="/FAQ" element={<FAQScreen />} />
        <Route path="/Privacy" element={<PrivacyScreen />} />
        <Route path="/Details" element={<FinerDetailsScreen />} />
        <Route path="/DeliveryPolicy" element={<DeliveryPolicyScreen />} />
        <Route path="/Contact" element={<ContactScreen />} />

        <Route path="/Login" element={<LoginScreen />} />
        <Route path="/Register" element={<RegisterScreen />} />
        <Route path="/Profile" element={<ProfileScreen />} />

        <Route path="/Cart" element={<CartScreen />} />
        <Route path="/Cart/:id" element={<CartScreen />} />

        <Route path="/Shipping" element={<ShippingScreen />} />
        <Route path="/Payment" element={<PaymentScreen />} />
        <Route path="/PlaceOrder" element={<PlaceOrderScreen />} />
        <Route path="/Order/:id" element={<OrderScreen />} />

        <Route path="/Products" element={<StoreScreen />} />
        <Route path="Products/search/:keyword" element={<StoreScreen />} />
        <Route path="Products/page/:pageNumber" element={<StoreScreen />} />
        <Route
          path="Products/search/:keyword/page/:pageNumber"
          element={<StoreScreen />}
        />
        <Route path="/Products/:id" element={<ProductScreen />} />

        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route
          path="/admin/productlist/:pageNumber"
          element={<ProductListScreen />}
        />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
