import React from 'react';
import logo from '../assets/instacart-logo-color.png';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <a href='//instacart.com'><img src={logo} className="Home-logo" alt="logo" /></a>
        </div>

        <div className='Home-main'>
          <h2>Shopper Application</h2>
          <p className='Home-Intro'>Get paid to shop!</p>

          <a className='Home-CTA' href='/apply'>Apply Now!</a>
        </div>

        {/* <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Home;
