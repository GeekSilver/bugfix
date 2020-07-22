import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles

// font awesome library set up
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// components
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import Bugs from "./components/Bugs";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import Tags from "./components/Tags";
import Contact from "./components/Contact";

function App() {
  // autoloading all font awesome brand icons
  library.add(fab);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Landing />
          </Layout>
        </Route>
        <Route path="/about">
          <Layout>
            <About />
          </Layout>
        </Route>
        <Route path="/bugs">
          <Layout>
            <div className="row mt-2">
              <div className="col-md-2 offset-md-1">
                <Sidebar />
              </div>

              <div className="col-md-8">
                <Bugs
                  bug="UNDEFINED NULL Constraint in App.js line 3:14"
                  tags={["js", "javascript", "reactjs"]}
                  datePosted="20-01-2020 6.04 pm"
                />
                <Bugs
                  bug="UNDEFINED NULL Constraint in App.js line 3:14"
                  tags={["js", "javascript", "reactjs"]}
                  datePosted="20-01-2020 6.04 pm"
                />
                <Bugs
                  bug="UNDEFINED NULL Constraint in App.js line 3:14"
                  tags={["js", "javascript", "reactjs"]}
                  datePosted="20-01-2020 6.04 pm"
                />{" "}
                <Bugs
                  bug="UNDEFINED NULL Constraint in App.js line 3:14"
                  tags={["js", "javascript", "reactjs"]}
                  datePosted="20-01-2020 6.04 pm"
                />{" "}
                <Bugs
                  bug="UNDEFINED NULL Constraint in App.js line 3:14"
                  tags={["js", "javascript", "reactjs"]}
                  datePosted="20-01-2020 6.04 pm"
                />{" "}
                <Bugs
                  bug="UNDEFINED NULL Constraint in App.js line 3:14"
                  tags={["js", "javascript", "reactjs"]}
                  datePosted="20-01-2020 6.04 pm"
                />
                <Pagination />
              </div>
            </div>
          </Layout>
        </Route>
        <Route path="/tags">
          <Layout>
            <Tags />
          </Layout>
        </Route>
        <Route path="/contact">
          <Layout>
            <Contact />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
