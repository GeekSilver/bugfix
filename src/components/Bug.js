import React from "react";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// styles
import "../bugs.css";
// // containers
// import bugs from "../container/bugs";

const Tag = ({ name }) => {
  return <span className="badge badge-info mx-1 my-1 p-1">{name}</span>;
};

const DatePosted = ({ date }) => {
  return <p className="font-weight-light">{date}</p>;
};

const Bug = ({ mode, bugs }) => {
  const bugDarkMode = useRef(null);
  const { bugException } = useParams();
  // fetch bug
  let bug;
  bug = bugs.find((bugg) => bugg.exception === bugException);
  

  useEffect(() => {
    mode
      ? bugDarkMode.current.classList.remove("darker-mode")
      : bugDarkMode.current.classList.add("darker-mode");
  });

  return (
    <div id="bug" className="container-sm my-2 pt-2 rounded " ref={bugDarkMode}>
      <div className="">
        <h3>{bug.exception}</h3>

        {bug.tags.map((tag) => (
          <Tag key={`${bug.exception}-${tag}-${Date.now()}`} name={tag.name} />
        ))}
        <DatePosted date={bug.published_at} />
        <div dangerouslySetInnerHTML={{ __html: bug.body }}>

        </div>
      </div>
    </div>
  );
};

export default Bug;
