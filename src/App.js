import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Error from './components/Error/Error';
import ThreeJS from './components/ThreeJS/Example'
import './App.css';

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/threejs" component={ThreeJS}/>
          <Route component={Error} />
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
