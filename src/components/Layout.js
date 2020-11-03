import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Cookie from "./Cookie";
import Footer from "./Footer";

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
      <Navbar mode={mode} setMode={setMode} />
      {React.cloneElement(children, {mode})}
      <Cookie />
      <Footer />
    </div>
  );
};

export default Layout;
