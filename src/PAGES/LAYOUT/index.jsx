import React, { Fragment } from "react";
import HomeAndMenu from "../HEADANDMENU";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import authAtom from "../atoms/auth/auth.atom";
// import { message } from "antd";

const Layout = ({ children, Services }) => {
  return (
    <Fragment>
      <HomeAndMenu Services={Services} />
      {children}
    </Fragment>
  );
};

export default Layout;
