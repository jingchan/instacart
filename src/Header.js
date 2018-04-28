import React from 'react';
import logo from '../assets/instacart-logo-color.png';
import './Home.css';

class Header extends React.Component {	
  render() {
    return (
      <div className="Home-header">
        <a href='/'><img src={logo} className="Home-logo" alt="logo" /></a>
      </div>
    );
  }
}

export default Header;
