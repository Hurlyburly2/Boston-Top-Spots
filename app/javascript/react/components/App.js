import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import AttractionsShowContainer from "../containers/AttractionsShowContainer";

export const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/attractions/:id" component={AttractionsShowContainer} />
    </Router>
  );
};

export default App;
