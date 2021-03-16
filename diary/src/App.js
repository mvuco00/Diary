import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  );
};

export default App;
