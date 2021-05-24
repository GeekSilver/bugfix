import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Landing = ({ mode }) => {
  const landingDarkMode = useRef(null);
  useEffect(() => {
    mode ? landingDarkMode.current.classList.remove("darker-mode") : landingDarkMode.current.classList.add("darker-mode");
   })
  return (
    <div className="jumbotron jumbotron-fluid" ref={landingDarkMode}>
      <div className="container">
        <h1 className="display-4 text-center">
          FOR THE LOVE <br /> OF <br /> DEBUGGING
        </h1>
        <p className="lead">
          We document fixes to many notorious bugs that may frustrate you so you
          can save that energy to build amazing things.
        </p>
        <div className="d-flex justify-content-around">
          <Link to="/bugs" className="btn btn-primary btn-lg" role="button">
            SEARCH FIX
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
