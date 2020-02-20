import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Event from "./Event";
// import NewPerson from "./NewPerson";
// import NewEvent from "./NewEvent";
// import Person from "./Person";
import Home from "./Home";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/person" component={NewPerson} />
      {/* <Route exact path="/event" component={NewEvent} />
      <Route path="/person/:Id" component={Person} />
      <Route path="/event/:Id" component={Event} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
