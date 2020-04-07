import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <NavLink to='' className="header-logo">Cody Luth</NavLink>
            <div className="header-navigation">
              <NavLink to='' exact={true} activeClassName="is-active" className="header-navigation-button">Home</NavLink>
              <NavLink to='projects' activeClassName="is-active" className="header-navigation-button">Projects</NavLink>
            </div>
          </div>
        </div>
        <div className="mainContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
