import React, { useEffect, useReducer, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../font-mfizz-2.4.1/font-mfizz.css";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import tags from "../container/tags";
import bugsDB from "../container/bugs";
import { BugsList } from "./Bugs";
import nextPrevPageReducer from "../reducers/index";
import Pagination from "./Pagination";

const Tag = ({ mode }) => {
  const darkTag = useRef(null);
  const { tagName } = useParams();
  let tag = tags.find((bug) => bug.name === tagName);
  const { fab, name, description } = tag;
  const icon = tag.fab ? [name] : `icon-${name}`;
  // query db for bugs in a particular tag
  let bugs = bugsDB.filter((bug) => bug.tags.includes(tagName));

  // state (containing pages object)
  const [state, setState] = useReducer(nextPrevPageReducer, {
    limit: 2,
    currPage: 1,
    nextPage: 2,
    prevPage: null,
    bugs: bugs.slice(0, 2),
    fetching: false,
    allRecords: bugs,
  });

  useEffect(() => {
    // toggle dark and light mode
    mode
      ? darkTag.current.classList.remove("darker-mode")
      : darkTag.current.classList.add("darker-mode");
  },[mode]);

  useEffect(() => {
    // query db for bugs in a particular tag
    bugs = bugsDB.filter((bug) => bug.tags.includes(tagName));
    // set state if
    setState({
      type: "NEW_TYPE_OF_RECORDS",
      fetching: false,
      allRecords: bugs,
      state: {
        limit: 2,
        currPage: 1,
        nextPage: 2,
        prevPage: null,
        bugs: bugs.slice(0, 2),
      },
    });
  }, [tagName]);

  let pages = {
    currPage: state.currPage,
    nextPage: state.nextPage,
    prevPage: state.prevPage,
  };

  return (
    <div key={`${name}-${fab}`} className="card border-0" ref={darkTag}>
      <div className="container">
        <div className="mt-2 row">
          {typeof icon == "string" ? (
            <i
              className={`${icon} text-center`}
              style={{ fontSize: "5em" }}
            ></i>
          ) : (
            <FontAwesomeIcon
              icon={["fab", icon[0]]}
              size="5x"
              style={{ display: "block", margin: "auto" }}
            />
          )}
        </div>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p
            className="card-text"
            style={{ fontSize: "1.4em", color: "#959db1" }}
          >
            {description}
          </p>
        </div>
        <div>
          <BugsList
            bugs={state.bugs}
            mode={mode}
          />
          <Pagination
            currPage={pages.currPage}
            prevPage={pages.prevPage}
            nextPage={pages.nextPage}
            setPage={setState}
            fetching={state.fetching}
            state={state}
            mode={mode}
            allRecords={bugs}
          />
        </div>
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
