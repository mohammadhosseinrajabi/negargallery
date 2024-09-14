import AdminContextContainer, { AdminContext } from "../../context/adminLayoutContext";
import React, { useContext, useEffect } from "react";

import Navbar from "./header/navbar";
import Sidbar from "./sidebar/Sidbar";
import style from "./style.css"
import Dashboard from "./pages/dashboard/Dashboard";

import Content from "./pages/Content";

const Index = () => {

  useEffect(()=>{
    // require('../../assets/js/togglesidebar')
    document.title = "پنل ادمین | گالری نگار ";
  },[])
  return (
    <AdminContextContainer>
    <>
    <Content/>
    <Navbar/>
    <Sidbar/>
     
    </>
    </AdminContextContainer>
  );
};
export default Index;
