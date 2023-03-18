import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { ROUTER } from "../../utils/constants";

const Layout = ({ children }) => {

  const history = useHistory();

  return (
    <div className="page">
      <Header />
      <div className={`page-body-wrapper`}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;