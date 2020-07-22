import React from "react";
// styles
import "../bugs.css";

const Tag = ({ name }) => {
  return <span className="badge badge-info mx-1 my-1 p-1">{name}</span>;
};

const DatePosted = ({ date }) => {
  return <p className="font-weight-light">{date}</p>;
};

const Bugs = ({ bug, tags, datePosted }) => {
  return (
    <div
      id="bugs"
      className="container-sm my-2 pt-2 border rounded"
      // onMouseOver={(event) => changeBorderOnMouseOver(event.target)}
      // onMouseLeave={(event) => changeBorderToDefaultOnMouseLeave(event.target)}
      key={`${bug}-${tags.length}-${datePosted}-${Date.now()}`}
    >
      <div className="">
        <h3>{bug}</h3>
        {tags.map((tag) => (
          <Tag key={`${bug}-${tag}-${Date.now()}`} name={tag} />
        ))}
        <DatePosted date={datePosted} />
      </div>
    </div>
  );
};

export default Bugs;
