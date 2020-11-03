import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../sidebar.css";

const TagLi = ({ to, mode }) => {
  const liDarkMode = useRef(null);
  useEffect(() => {
    mode
      ? liDarkMode.current.classList.remove("darker-mode-link")
      : liDarkMode.current.classList.add("darker-mode-link", "rounded", "my-1");
  });
  return (
    <Link
      id="sidebar-li"
      className="list-group-item list-group-item-action"
      to={`/tags/${to}`}
      ref={liDarkMode}
    >
      {to}
    </Link>
  );
};

const Sidebar = ({ tags, mode }) => {
  return (
    <div className="d-none d-md-block">
      <h6>Tags</h6>
      <ul className="list-group list-group-flush">
        {tags.map((tag) => (
          <TagLi key={`bugs-${tag.name}`} to={tag.name} mode={mode} />
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  tags: PropTypes.array,
  mode: PropTypes.bool,
};

export default Sidebar;
