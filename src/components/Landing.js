import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-center">
          FOR THE LOVE <br /> OF <br /> DEBUGGING
        </h1>
        <p className="lead">
          We document fixes to many notorious bugs that may frustrate you so you
          can save that energy to build amazing things.
        </p>
        <div className="d-flex justify-content-around">
          <Link to="/bugs" className="btn btn-primary btn-lg" role="button">SEARCH FIX</Link>
        </div> 
      </div>
    </div>
  );
};

export default Intro;
