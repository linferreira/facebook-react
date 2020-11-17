import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "../pages/Feed/";
import Login from "../pages/Login";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/Feed" exact component={Feed} />
  </Switch>
);

export default AppRoutes;
