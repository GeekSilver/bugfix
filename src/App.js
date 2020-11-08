import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles

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
import tags from "./container/tags";
import bugs from "./container/bugs";
// reducers
import nextPrevPageReducer from "./reducers";
import Tag from "./components/Tag";

function App() {
  // autoloading all font awesome brand icons
  library.add(fab);

  const [state, setState] = useReducer(nextPrevPageReducer, {
    limit: 2,
    currPage: 1,
    nextPage: 2,
    prevPage: null,
    bugs: bugs.slice(0, 2),
    fetching: false,
    allRecords: bugs
  });

  // true is light mode and false is dark mode
  const [mode, setMode] = useState(true);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout mode={mode} setMode={setMode}>      
            <Landing />
          </Layout>
        </Route>
        <Route path="/about">
          <Layout mode={mode} setMode={setMode}>
            <About />
          </Layout>
        </Route>
        <Route path="/bugs/:bugException">
          <Layout mode={mode} setMode={setMode}>
            <Bug />
          </Layout>
        </Route>
        <Route path="/bugs">
          <Layout mode={mode} setMode={setMode}>
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
          </Layout>
        </Route>
        <Route path="/tags/:tagName">
          <Layout mode={mode} setMode={setMode}>
            <Tag />
          </Layout>
        </Route>
        <Route path="/tags">
          <Layout mode={mode} setMode={setMode}>
            <Tags tags={tags} />
          </Layout>
        </Route>
        <Route path="/contact">
          <Layout mode={mode} setMode={setMode}>
            <Contact />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
