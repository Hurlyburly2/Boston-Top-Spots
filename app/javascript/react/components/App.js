import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import AttractionsShowContainer from "../containers/AttractionsShowContainer";
import ReviewIndexContainer from "../containers/ReviewIndexContainer";

export const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/attractions/:id" component={AttractionsShowContainer} />
      <Route path="/reviews" component={ReviewIndexContainer} />
    </Router>
  );
};

export default App;
