import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../font-mfizz-2.4.1/font-mfizz.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Tag = ({ icon, link, tag, about, mode }) => {
  const darkTag = useRef(null);
  useEffect(() => {
    mode ? darkTag.current.classList.remove('darker-mode') : darkTag.current.classList.add('darker-mode');
  })
  return (
    <div key={`${icon}-${link}`} className="card border-0" ref={darkTag}>
      <div className="d-flex justify-content-center mt-2">
        {typeof icon == "string" ? (
          <i className={icon} style={{fontSize: "5em"}}> </i>
        ) : (
          <FontAwesomeIcon icon={["fab", icon[0]]} size="5x" />
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{tag}</h5>
        <p className="card-text">{about}</p>
        <Link to={link} className="card-link">
          {tag} &rarr;
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
  mode: PropTypes.bool,
};

export default Tag;
