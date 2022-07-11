import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Fancy } from "./Fancy";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/fancy" component={Fancy} />
  </Switch>
);

export default App;
