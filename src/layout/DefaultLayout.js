import React from "react";
import { AppHeader, AppFooter } from "../components";

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AppHeader />
      {children}
      <AppFooter />
    </React.Fragment>
  );
};

export default DefaultLayout;
