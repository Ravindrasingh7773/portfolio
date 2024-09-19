import React, { Fragment } from "react";
import Header from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer"; 

const Layout = () => {
  return (
    <Fragment> 
      <Header /> 
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
