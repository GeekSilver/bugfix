import React, { useEffect,useContext, useRef } from "react";
import Navbar from "./Navbar";
import Cookie from "./Cookie";
import Footer from "./Footer";
// cookies logic
import { ACCEPT_COOKIES } from "../cookies";
import { checkCookie } from "../cookieLogic";

// theme context
import ThemeContext from "../context";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children, tags }) => {
  const themeContext = useContext(ThemeContext);
  const mode = themeContext.mode;
  const setMode = themeContext.setMode;
  // useRef to add / remove classes to layout
  const rootLayout = useRef(null);
  // update modes by toggling dark and light classes
  useEffect(() => {
    const doc = rootLayout.current;
    mode ? doc.classList.remove("dark-mode") : doc.classList.add("dark-mode");
  });

  return (
    <div className="container-fluid " ref={rootLayout}>
      <Navbar mode={mode} setMode={setMode} />
      {/* pass mode prop to child component */}
      {React.cloneElement(children, { mode })}
      {/* check if they gave consent for use of cookies before */}
      {checkCookie(ACCEPT_COOKIES) ? (
        ""
      ) : (
        <Cookie name={ACCEPT_COOKIES} value={true} expiryDays="365" path="/" />
      )}
      <Footer tags={tags} />
    </div>
  );
};

export default Layout;
