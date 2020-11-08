// import bugs from "../container/bugs";

const bugsReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_BUGS":
      return { ...state, fetching: action.fetching };

    case "STACK_BUGS":
      return state;

    default:
      return state;
  }
};

const fetchFeed = (limit, offset, fetching, oldBugs, bugs) => {
  if (fetching) {
    return oldBugs;
  }

  bugsReducer(oldBugs, { type: "FETCHING_BUGS", fetching: true });

  let currPage,
    prevPage,
    nextPageStartIndex,
    nextPageEndIndex,
    unViewedBugs,
    nextPage;

  unViewedBugs = bugs.length - limit * offset; // offset is nextPage - 1

  if (unViewedBugs > 0) {
    nextPageStartIndex = limit * offset;
    nextPageEndIndex =
      unViewedBugs >= limit ? nextPageStartIndex + limit : bugs.length;

    currPage = offset + 1;
    nextPage = unViewedBugs > limit ? currPage + 1 : null;
    prevPage = offset === 0 ? null : offset;

    return bugsReducer(
      {
        bugs: bugs.slice(nextPageStartIndex, nextPageEndIndex),
        limit: 2,
        currPage,
        nextPage,
        prevPage,
        fetching: false,
      },
      {
        type: "STACK_BUGS",
      }
    );
  }
  return bugsReducer(oldBugs, { type: "FETCHING_BUGS", fetching: false });
};

const nextPrevPageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      if (
        action.state.limit * action.state.currPage >=
        action.allRecords.length
      ) {
        return state;
      }
      return fetchFeed(
        action.state.limit,
        action.state.currPage,
        action.fetching,
        action.state,
        action.allRecords
      );

    case "PREV_PAGE":
      if (action.state.currPage > 1) {
        return fetchFeed(
          action.state.limit,
          action.state.currPage - 2,
          action.fetching,
          action.state,
          action.allRecords
        );
      }
      return state;

    case "NEW_TYPE_OF_RECORDS":
      console.log("hit default endpoint to update state");

      // return {...action.state, allRecords: action.allRecords, fetching: false}
      return fetchFeed(
        action.state.limit,
        action.state.offset,
        action.fetching,
        action.state,
        action.allRecords
      );

    default:
      return state;
  }
};

export default nextPrevPageReducer;
