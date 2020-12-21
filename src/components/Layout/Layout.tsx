import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../../theme/globalStyle";
import { Navbar } from "../Navbar/Navbar";

export interface LayoutProps {}

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <React.Fragment>
      <Global styles={globalStyle} />
      <Navbar />
      {children}
      <div id="portal"></div>
    </React.Fragment>
  );
};
