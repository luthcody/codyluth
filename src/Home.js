import React from 'react';
import './App.css';
import zebra from './zebra.jpeg'

function Home() {
  return (
    <div>
      <h1>Hey there.</h1>
      <div className="hero-banner">
        <img src={zebra} alt="Zebra" width="100%"/>
      </div>
      <h1>This site is under construction.</h1>
    </div>
  );
}

export default Home;
