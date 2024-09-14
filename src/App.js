import "./App.css";
import Home from "./negarGallery/layout/home";
import Index from "./layouts/admin";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./negarGallery/layout/product";
import Products from "./negarGallery/layout/products";
import Notfound from "./negarGallery/layout/notfound";
import Login from "./loginRegisterComponent/login";
import RegisterWithAPI from "./loginRegisterComponent/register";
import Register from "./loginRegisterComponent/register";
import ProductTable from "./layouts/admin/pages/dashboard/ProductTable";
import Navbar from "./layouts/admin/header/navbar";
import Sidbar from "./layouts/admin/sidebar/Sidbar.jsx";
import Dashboard from "./layouts/admin/pages/dashboard/Dashboard.jsx";
import Category from "./layouts/admin/pages/category/Category.jsx";
import ProductAdmin from "./layouts/admin/pages/ProductAdmin/ProductAdmin.jsx";
import Content from "./layouts/admin/pages/Content.jsx";
import Brands from "./layouts/admin/pages/brands/Brands.jsx";
import Basket from "./layouts/admin/pages/basket/Basket.jsx";
import ManageOrders from "./layouts/admin/pages/manageOrders/ManageOrders.jsx";
import UsersAdmin from "./layouts/admin/pages/Users/UsersAdmin.jsx";
import ManageRole from "./layouts/admin/pages/ManageRole/ManageRole.jsx";
import QuestionAdmin from "./layouts/admin/pages/question/QuestionAdmin.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* مسیرهای اصلی سایت */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* مسیرهای پنل ادمین */}
        <Route path="/admin" element={<Index />}>
          <Route index element={<Content />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categoryAdmin" element={<Category />} />
          <Route path="productAdmin" element={<ProductAdmin />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="basketAdmin" element={<Basket />} />
          <Route path="OrderAdmin" element={<ManageOrders />} />
          <Route path="Addusers" element={<UsersAdmin />} />
          <Route path="ManageRole" element={<ManageRole />} />
          <Route path="questionAdmin" element={<QuestionAdmin />} />



          
        </Route>

        {/* صفحه 404 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
 
    </div>
  );
}

export default App;
