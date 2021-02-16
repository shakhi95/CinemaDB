import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleItem from "./pages/SingleItem";

//components
import Navbar from "./components/Navbar";

const App = () => {
  //
  return (
    <div className="bg2 ft1 min-vh-100">
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/database/:id" exact component={SingleItem} />
          <Route path="*" component={Error} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
