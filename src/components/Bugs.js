import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
// styles
import "../bugs.css";

const Tag = ({ name }) => {
  return <span className="badge badge-info mx-1 my-1 p-1">{name}</span>;
};

const DatePosted = ({ date }) => {
  return <p className="font-weight-light">{date}</p>;
};

const Bug = ({ bug, mode }) => {
  const bugDarkMode = useRef(null);

  useEffect(() => {
    mode
      ? bugDarkMode.current.classList.remove("darker-mode")
      : bugDarkMode.current.classList.add("darker-mode");
  });

  return (
    <div id="bug" className="container-sm my-2 pt-2 rounded " ref={bugDarkMode}>
      <div className="">
        <Link to={`/bugs/${bug.exception}`}>
          <h3>{bug.exception}</h3>
        </Link>
        {bug.tags !== undefined
          ? bug.tags.map((tag) => (
              <Tag
                key={`${bug.exception}-${tag}-${Date.now()}`}
                name={tag.name}
              />
            ))
          : ""}
        <DatePosted date={bug.published_at} />
      </div>
    </div>
  );
};

export const BugsList = ({ bugs, mode }) => {
  return bugs.map((bug) => <Bug key={bug.exception} bug={bug} mode={mode} />);
};

const Bugs = ({
  bugs,
  tags,
  pages,
  setPage,
  fetching,
  state,
  allRecords,
  mode,
}) => {
  return (
    <div className="row mt-2">
      <div className="col-md-2 offset-md-1">
        <Sidebar tags={tags} mode={mode} />
      </div>

      <div className="col-md-8">
        <BugsList bugs={bugs} mode={mode} />

        <Pagination
          currPage={pages.currPage}
          prevPage={pages.prevPage}
          nextPage={pages.nextPage}
          setPage={setPage}
          fetching={fetching}
          state={state}
          mode={mode}
          allRecords={allRecords}
        />
      </div>
    </div>
  );
};

export default Bugs;
