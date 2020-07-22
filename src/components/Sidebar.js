import React from "react";
import { Link } from "react-router-dom";
import "../sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-none d-md-block">
      <h6>Tags</h6>
      <ul className="list-group list-group-flush">
        <li id="sidebar-li" className="list-group-item">
          <Link className="list-group-item-action" to="#">
            Linux
          </Link>
        </li>
        <li id="sidebar-li" className="list-group-item">
          <Link className="list-group-item-action" to="#">
            Ubuntu
          </Link>
        </li>
        <li id="sidebar-li" className="list-group-item">
          <Link className="list-group-item-action" to="#">
            Node js
          </Link>
        </li>
        <li id="sidebar-li" className="list-group-item">
          <Link className="list-group-item-action" to="#">
            Laravel
          </Link>
        </li>
        <li id="sidebar-li" className="list-group-item">
          <Link className="list-group-item-action" to="#">
            Java
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
