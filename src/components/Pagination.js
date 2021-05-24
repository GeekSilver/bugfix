import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// actions
import { NEXT_PAGE, PREV_PAGE } from "../actions";

const Pagination = ({
  currPage,
  nextPage,
  prevPage,
  setPage,
  fetching,
  state,
  allRecords,
  mode,
}) => {
  const pageItemDarkMode = document.querySelectorAll(".page-link");
  useEffect(() => {
    mode
      ? pageItemDarkMode.forEach((el) =>
          el.classList.remove("darker-mode-link")
        )
      : pageItemDarkMode.forEach((el) => el.classList.add("darker-mode-link"));
  }, [mode, pageItemDarkMode]);
  

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center"
    >
      <ul className="pagination">
        <li className="page-item">
          <Link
            className="page-link"
            to="#"
            onClick={() =>
              setPage({ type: PREV_PAGE, fetching, state, allRecords })
            }
          >
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            {prevPage}
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            {currPage}
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            {nextPage}
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link"
            to="#"
            onClick={() =>
              setPage({ type: NEXT_PAGE, fetching, state, allRecords })
            }
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
