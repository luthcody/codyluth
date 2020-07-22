import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <div className="header-logo">Cody Luth</div>
            <div className="header-navigation">
              <div className="header-navigation-button">
                Button 1
              </div>
              <div className="header-navigation-button">
                Button 2
              </div>
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
