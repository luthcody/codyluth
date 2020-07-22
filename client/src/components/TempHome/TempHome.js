import React from 'react';
import ConstructionPhoto from '../../images/construction.gif';
import './TempHome.css';

function TempHome() {
  return (
    <div>
      <div className="content">
        <img className="image" src={ ConstructionPhoto } alt="Cody Luth"/>
        <h1>Work in Progress...</h1>
      </div>
    </div>
  );
}

export default TempHome;
