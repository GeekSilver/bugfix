import bugs from '../container/bugs';

const moreFeed = (limit, offset) => {
  let currPage, nextPageStartIndex, nextPageEndIndex, unViewedBugs;
  let nextPage = false;

  unViewedBugs = bugs.length - limit * offset;
  nextPageStartIndex = limit * offset - 1;
  nextPageEndIndex =
    unViewedBugs >= limit ? nextPageStartIndex + limit - 1 : bugs.length - 1;

  if (unViewedBugs > 0) {
    currPage = offset + 1;
    nextPage = currPage + 1;
    prevPage = offset;

    

    return {
      bugs: bugs.slice(nextPageStartIndex, nextPageEndIndex),
      currPage,
      nextPage,
      prevPage,
    };
  }
};

export default moreFeed;

const useBugsFeed = () => {};
