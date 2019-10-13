import React from 'react';
import Zebra from './Zebra.jpeg'

function Home() {
  return (
    <div>
      <h1>Oop.. Didn't expect to see you here.. (404)</h1>
      <div className="hero-banner">
        <img src={Zebra} alt="Zebra" width="100%"/>
      </div>
    </div>
  );
}

export default Home;
