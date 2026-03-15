import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ConfeccaoBrasil from "./pages/ConfeccaoBrasil";

function Routes() {
  return (

      <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route path="/data" exact component={DataPortfolio} />*/}
        <Route path="/data/confeccao-brasil" component={ConfeccaoBrasil} />
      </Switch>

  );
}

export default Routes;