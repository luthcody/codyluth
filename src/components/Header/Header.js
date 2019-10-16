import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <Link to='' className="header-logo">Cody Luth</Link>
            <div className="header-navigation">
              <Link to='projects' className="header-navigation-button">
                Projects
              </Link>
              <Link to='about' className="header-navigation-button">
                About
              </Link>
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
