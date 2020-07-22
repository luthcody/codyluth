import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import TempHome from './components/TempHome/TempHome';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Error from './components/Error/Error';
import ThreeJS from './components/ThreeJS/Example'
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Header>
          <Switch>
            <Route exact path="/" component={TempHome}/>
            <Route path="/home" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/threejs" component={ThreeJS}/>
            <Route component={Error} />
          </Switch>
        </Header>
      </Router>
    )
  };
}

export default App;