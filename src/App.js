import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './navigation/Header';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
