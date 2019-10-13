import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import './App.css';

import Home from './Home';
import Express from './components/Express/Express';
import Error from './components/Error/Error';

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/express" component={Express}/>
          <Route component={Error} />
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
