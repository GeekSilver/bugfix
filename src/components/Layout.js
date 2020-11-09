import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Cookie from "./Cookie";
import Footer from "./Footer";
// cookies logic
import { ACCEPT_COOKIES } from "../cookies";
import { checkCookie } from "../cookieLogic";

const Layout = ({ children, mode, setMode }) => {
  // useRef to add / remove classes to layout
  const rootLayout = useRef(null);
  // update modes by toggling dark and light classes
  useEffect(() => {
    const doc = rootLayout.current;
    mode ? doc.classList.remove("dark-mode") : doc.classList.add("dark-mode");
  });

  return (
    <div className="container-fluid " ref={rootLayout}>
      {/* check if there exists a preferred mode cookie */}
      <Navbar mode={mode} setMode={setMode} />
      {/* pass mode prop to child component */}
      {React.cloneElement(children, { mode })}
      {/* check if they gave consent for use of cookies before */}
      {checkCookie(ACCEPT_COOKIES) ? (
        ""
      ) : (
        <Cookie name={ACCEPT_COOKIES} value={true} expiryDays="365" path="/" />
      )}
      <Footer />
    </div>
  );
};

export default Layout;
