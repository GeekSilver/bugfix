import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useRouteMatch } from "react-router-dom";

// import containers
import tags from "../container/tags";

const StyledLi = styled.li`
  list-style: none;
  text-align: left;
`;

const Li = ({ to, name }) => {
  const match = useRouteMatch();

  function isActive() {
    if (match.path === to) return true;
    return false;
  }

  return (
    <StyledLi key={to} className={`nav-item ${isActive() ? " active" : ""}`}>
      <Link to={to}>
        {name}
        {isActive() && <span className="sr-only">(current)</span>}
      </Link>
    </StyledLi>
  );
};

const FabIcon = ({ icon }) => (
  <>
    <FontAwesomeIcon icon={["fab", icon]} style={{}} /> {icon} <br />
  </>
);
const MfizzIcon = ({ icon }) => (
  <>
    <i className={`icon-${icon}`}></i> {icon} <br />
  </>
);

const TagLi = ({ tag }) => (
  <Link to={`/tags/${tag.name}`} className="badge badge-info m-1">
    {tag.fab ? <FabIcon icon={tag.name} /> : <MfizzIcon icon={tag.name} />}
  </Link>
);

const TagsUl = ({ tags }) => tags.map((tag) => <TagLi key={tag.name} tag={tag} />);

const Footer = ({ tags }) => {
  return (
    <div className="container-fluid mt-md-5 footer" >
      <div className="row" >
        <div className="col-md-5">
          <h3 className="mb-4">BUGFIX</h3>
          <p>
            BUGFIX is dedicated to helping making debugging easier by providing
            fixes to bugs that often re-occur and may be major blockers. It goes
            beyond just providing working fixes but also gives the contexts for
            using various different fixes.
          </p>
        </div>
        <div className="col-md-2 offset-md-1">
          <h3 className="mb-3">Tags</h3>
          <TagsUl tags={tags} />
        </div>
        <div className="col-md-2 offset-md-2">
          <h3 className="mb-3">Quick Links</h3>
          <Li to="/tags" name="Tags" />
          <Li to="/bugs" name="Bugs" />
          <Li to="/contact" name="Contact" />
          <Li to="/about" name="About" />
        </div>
      </div>
      <hr className=" row bg-dark" />
      <div className="row mb-md-2 d-flex align-items-center justify-content-between" style={{backgroundColor:""}}>
        <p className="">
          Copyright &copy; {new Date().getFullYear()} bugfix, All rights
          reserved by BUGFIX.
        </p>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
