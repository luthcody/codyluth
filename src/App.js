import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Error from './components/Error/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route component={Error} />
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
