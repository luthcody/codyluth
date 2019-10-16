import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './Header/Header';
import Home from './Home';
import Error from './components/Error/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={Error} />
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
