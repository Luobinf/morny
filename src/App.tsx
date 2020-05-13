import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './components/Layout';

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

function Tags() {
  return (
    <Layout>
      标签页面
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      金钱页面
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      统计页面
    </Layout>
  );
}

function NoMatch() {
  return (
    <div>
      <h3>
        抱歉页面不存在
      </h3>
    </div>
  );
}

export default App;
