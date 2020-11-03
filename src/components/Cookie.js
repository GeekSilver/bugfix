import React from "react";

import { Link } from "react-router-dom";

const Cookie = () => {
  return (
    <div className="fixed-bottom mx-2">
      <div
        className="alert alert-dismissible fade show bg-info text-white d-md-flex align-items-center justify-content-between"
        role="alert"
      >
        <p id="cookies" className="">
          This site uses cookies. By continuing to use this website, you agree
          to their use. To find out more see &nbsp;
          <Link className="text-white alert-link" to="/about">
            terms and conditions
          </Link>
          .
        </p>
        <button
          data-dismiss="alert"
          aria-label="Accept use of Cookies"
          className="btn btn-success"
        >
          Accept & Close
        </button>
      </div>
    </div>
  );
};

export default Cookie;
