import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./pages/Counter/Counter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/up">
          <Counter up />
        </Route>
        <Route path="/down">
          <Counter down />
        </Route>
        <Route path="/reset">
          <Counter reset />
        </Route>
        <Route path="/">
          <Counter up />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
