import React, { useReducer, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// contexts
import ThemeContext from "./context";

// font awesome library set up
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// components
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import Bug from "./components/Bug";
import Bugs from "./components/Bugs";
import Tags from "./components/Tags";
import Contact from "./components/Contact";
// containers
// import tags from "./container/tags";
// import bugs from "./container/bugs";
// reducers
import nextPrevPageReducer from "./reducers";
import Tag from "./components/Tag";
// cookies logic
import { LIGHT_MODE } from "./cookies";
import { checkCookie, getCookie } from "./cookieLogic";

function App() {
  // autoloading all font awesome brand icons
  library.add(fab);
  // api url
  const apiURL = process.env.REACT_APP_PRODUCTION_API;
  // bugs and tags
  const [bugs, setBugs] = useState([]);
  const [tags, setTags] = useState([]);

  let [isLoading, setIsLoading] = useState(false);

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
    const fetchData = async (url, options) => {
      setIsLoading(true);
      try {
        // fetch bugs
        const bugsRes = await fetch(
          `${apiURL}/bugs`,
          {}
        );
        const bugsJson = await bugsRes.json();

        setState({
          type: "NEXT_PAGE",
          state: {
            limit: 2,
            currPage: 0,
            nextPage: 1,
            prevPage: null,
            bugs: bugsJson.slice(0, 2),
            fetching: false,
            allRecords: bugsJson,
          },
          fetching: false,
          allRecords: bugsJson,
        });
        setBugs(bugsJson);
        // fetch tags
        const tagsRes = await fetch(
          `${apiURL}/tags`,
          {}
        );
        const tagsJson = await tagsRes.json();
        setTags(tagsJson);
        // toggle isLoading to false
        setIsLoading(false);
        return bugsJson; // return bugs : this is for use is setState
      } catch (error) {
        setIsLoading(false);
        return { error };
      }
    };
    fetchData();
  }, []);

  let modeValue;
  // check if darkMode cookie exists in cookie
  modeValue = checkCookie(LIGHT_MODE) ? getCookie(LIGHT_MODE) === "true" : true;
  const [mode, setMode] = useState(modeValue);

  // theme contextValue
  const themeContextValue = { mode, setMode: (modeVal) =>  ( setMode(modeVal) )  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout tags={tags} >
              <Landing />
            </Layout>
          </Route>
          <Route path="/about">
            <Layout tags={tags} >
              <About />
            </Layout>
          </Route>
          <Route path="/bugs/:bugException">
            <Layout tags={tags} >
              <Bug bugs={state.bugs} />
            </Layout>
          </Route>
          <Route path="/bugs">
            <Layout tags={tags} >
              {isLoading ? (
                <div className="alert">Fetchinglo bugs</div>
              ) : (
                <Bugs
                  bugs={state.bugs}
                  tags={tags}
                  pages={{
                    currPage: state.currPage,
                    nextPage: state.nextPage,
                    prevPage: state.prevPage,
                  }}
                  setPage={setState}
                  fetching={state.fetching}
                  allRecords={bugs}
                  state={state}
                />
              )}
            </Layout>
          </Route>
          <Route path="/tags/:tagName">
            <Layout tags={tags} >
              <Tag tags={tags} />
            </Layout>
          </Route>
          <Route path="/tags">
            <Layout tags={tags} >
              {isLoading ? <div> Loading tags ... </div> : <Tags tags={tags} />}
            </Layout>
          </Route>
          <Route path="/contact">
            <Layout tags={tags} >
              <Contact />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
