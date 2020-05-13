import React from 'react';
import styled from 'styled-components';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from 'react-router-dom';
import Nav from './components/Nav';

const Wrapper=styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>Home</h2>;
}

function Money() {
  return <h2>About</h2>;
}

function Statistics() {
  return <h2>Users</h2>;
}

function NoMatch() {
  return (
    <div>
      <h3>
        请输入正确的地址
      </h3>
    </div>
  );
}

export default App;
