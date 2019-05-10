import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Footer from "../components/Footer";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
