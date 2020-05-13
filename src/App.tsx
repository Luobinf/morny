import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Tags from './pages/Tags';
import Money from './pages/Money';
import Statistics from './pages/Statistics';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags" exact>
          <Tags />
        </Route>
        <Route path="/money" exact>
          <Money />
        </Route>
        <Route path="/statistics" exact>
          <Statistics />
        </Route>
        <Route exact path="/">
          <Redirect to="/tags" />
        </Route>
        <Route path="*" exact>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
