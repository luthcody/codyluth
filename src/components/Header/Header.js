import React, { Component } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header(props) {
  var location = useLocation();
  console.log(location.pathname);

  var headerContent;
  if(location.pathname !== "/"){
    headerContent = (
      <div className="header">
        <div className="header-content">
          <NavLink to='' className="header-logo">Cody Luth</NavLink>
          <div className="header-navigation">
            <NavLink to='' exact={true} activeClassName="is-active" className="header-navigation-button">Home</NavLink>
            <NavLink to='projects' activeClassName="is-active" className="header-navigation-button">Projects</NavLink>
          </div>
        </div>
      </div>
    )
  } else {
    headerContent = (
      <br/>
    )
  }

  return (
    <div>
      {headerContent}
      <div className="mainContent">
        {props.children}
      </div>
    </div>
  );
}

export default Header;
