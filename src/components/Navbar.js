import React from "react";
import {
  Link,
  useRouteMatch
} from 'react-router-dom'

const Li = ({to, name}) => {

  const match = useRouteMatch();

  function isActive() {
    if (match.path === to)
      return true;
    return false;
  }

  return (
    <li key={to} className={`nav-item ${isActive() ? ' active' : ''}`}>
      <Link className="nav-link" to={to}>
        {name }{isActive() && <span className="sr-only">(current)</span>}
      </Link>
    </li>
  )
}


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BugFix
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <Li
            to="/tags"
            name="Tags"
          />
          <Li 
            to="/bugs"
            name="Bugs"
            />
          <Li
            to="/contact"
            name="Contact"
          />
          <Li 
            to="/about"
            name="About"
            />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
