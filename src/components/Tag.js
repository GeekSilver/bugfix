import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../font-mfizz-2.4.1/font-mfizz.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Tag = ({ icon, link, tag, about }) => {
  return (
    <div key={`${icon}-${link}`} className="card col-md-3">
      <div className="d-flex justify-content-center mt-2">
        {typeof icon == "string" ? (
          <i className={icon} style={{fontSize: "5em"}}> </i>
        ) : (
          <FontAwesomeIcon icon={icon} size="5x" />
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{tag}</h5>
        <p className="card-text">{about}</p>
        <Link to={link} className="card-link">
          visit &rarr;
        </Link>
      </div>
    </div>
  );
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  link: PropTypes.string,
  tag: PropTypes.string,
  about: PropTypes.string,
};

export default Tag;
