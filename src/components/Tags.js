import React, { useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../font-mfizz-2.4.1/font-mfizz.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Tag = ({ icon, link, tag, about, mode }) => {
  const darkTag = useRef(null);
  useEffect(() => {
    mode
      ? darkTag.current.classList.remove("darker-mode")
      : darkTag.current.classList.add("darker-mode");
  });
  return (
    <div key={`${icon}-${link}`} className="card border-0" ref={darkTag}>
      <div className="d-flex justify-content-center mt-2">
        {typeof icon == "string" ? (
          <i className={icon} style={{ fontSize: "5em" }}>
            {" "}
          </i>
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

//  component to be displayed when fetching tags results in an empty array
const NoTags = ({ mode }) => {
  const darkNoTags = useRef(null);
  useEffect(() => {
    mode ?
      darkNoTags.current.classList.remove("darker-mode")
      : darkNoTags.current.classList.add("darker-mode");
  });
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center card border-0"
      style={{ height: "40vh", width: "inherit" }}
      ref={darkNoTags}
    >
      <div className="t-capitalize" style={{fontFamily: "poppins"}}><h5>OOPS! NO TAGS FOUND.</h5></div>
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

const Tags = ({ tags, mode }) => {
  return (
    <div className="container">
      {tags.length > 0 ? (
        <div className="row card-columns d-inline-block ">
          {tags.map((tag) => (
            <Tag
              icon={tag.fab ? [tag.name] : `icon-${tag.name}`}
              link={`/tags/${tag.name}`}
              tag={tag.name}
              about={tag.description}
              mode={mode}
              key={tag.name}
            />
          ))}
        </div>
      ) : (
          <NoTags mode={mode}/>
      )}
    </div>
  );
};

export default Tags;
