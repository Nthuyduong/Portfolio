import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";

const Layout = ({ children }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="page">
      <Header />
      <div className={`page-body-wrapper`}>
        {children}
      </div>
      <Footer />
      <div className="back-to-top" onClick={() => { scrollToTop() }}>Back to top</div>
      <div className="get-in-touch" onClick={() => { scrollToTop() }}>Get in touch</div>
    </div>
  )
}

export default Layout;