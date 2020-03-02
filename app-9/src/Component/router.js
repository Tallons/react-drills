import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home from "./Home";
import SignUp from './SignUp';
import Details from "./Details";

export default(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/details" component={Details} />
  </Switch>
);