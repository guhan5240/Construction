import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/CommonPage/Header";
import Home from "../components/HomePage/Home";
import LoginPage from "../components/LoginPage/LoginPage";
import Collection from "../components/CollectionPage/Collection";
import Support from "../components/SupportPage/Support";
import OrderStatus from "../components/SupportPage/OrderStatus";
import Wishlist from "../components/Wishlist/wishlist";
import Footer from "../components/CommonPage/Footer";
import Terms from "../components/CommonPage/terms";
import Privacy from "../components/CommonPage/Privacy";
import Cookies from "../components/CommonPage/Cookies";
import CartPage from "../components/CartPage/CardPage";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Verification from "../components/LoginPage/Verification";
import UserName from "../components/LoginPage/UserName";
import AdminDashboard from "../Admin/router/AdminDashboard";
import SalePage from "../components/SalePage/SalePage";
import AccountPage from "@/components/account/AccountPage";
import OrdersPage from "@/components/account/OrderPage";
import AdminLogin  from "@/Admin/components/Login/AdminLogin";


const Layout = ({ children }) => {
  const location = useLocation();

  // pages where we don't want Header/Footer
  const noLayoutPages = ["/login", "/otp", "/user-details"];
  
  // Check if current path starts with /Admin (covers all admin routes)
  const isAdminRoute = location.pathname.startsWith("/Admin");
  
  const hideLayout = noLayoutPages.includes(location.pathname) || isAdminRoute;

  return (
    <div className="w-full bg-global-3 flex flex-col items-center overflow-hidden">
      {!hideLayout && <Header />}
      <main className="w-full">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<Verification />} />
          <Route path="/user-details" element={<UserName />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/support" element={<Support />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/Admin/*" element={<AdminDashboard />} /> 
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/orders" element={<OrdersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;