import bugs from "../container/bugs";

const bugsReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_BUGS":
      return { ...state, fetching: action.fetching };

    case "STACK_BUGS":
      console.log(`stack bugs length: ${state.bugs.length}`);
      return state;

    default:
      return state;
  }
};

const fetchFeed = (limit, offset, fetching, oldBugs) => {
  console.log(
    `vars are: limit ${limit} , offset: ${offset} fetching: ${fetching} oldBugs: ${oldBugs}`
  );
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
    nextPageStartIndex =  limit * offset ;
    nextPageEndIndex =
      unViewedBugs >= limit ? nextPageStartIndex + limit : bugs.length;
    console.log(
      `func vars, bugsLength: ${bugs.length} unviewedBugs: ${unViewedBugs} nextPageStartIndex: ${nextPageStartIndex} nextPageEndIndex: ${nextPageEndIndex}`
    );

    currPage = offset + 1;
    nextPage = unViewedBugs > limit ? currPage + 1 : null;
    prevPage = offset === 0 ? null : offset;

    console.log(
      `-> currPage: ${currPage} nextpage: ${nextPage} prevPage: ${prevPage}`
    );

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
      if (action.state.limit * action.state.currPage >= bugs.length) {
        return state;
      }
      console.log("NEXT PAGE ");
      return fetchFeed(
        action.state.limit,
        action.state.currPage,
        action.fetching,
        action.state
      );

    case "PREV_PAGE":
     
      if (action.state.currPage > 1) {
        return fetchFeed(
          action.state.limit,
          action.state.currPage - 2,
          action.fetching,
          action.state
        );
      }
      console.log("prev page");
      return state;

    default:
      return state;
  }
};

export default nextPrevPageReducer;
