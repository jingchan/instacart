import React from 'react';
import Header from './Header';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />

        <div className='Home-main'>
          <h2 className='Home-title'>Shopper Application</h2>
          <p className='Home-text'>Get paid to shop!</p>
          <ul className='Home-list'>
            <li className='Home-item'>
              <span className='Home-item-text'>
              Earn extra money in your spare time
              </span>
            </li>
            <li className='Home-item'>
              <span className='Home-item-text'>
              Flexible hours that work for you
              </span>
            </li>
            <li className='Home-item'>
              <span className='Home-item-text'>
              Car is not required
              </span>
            </li>
            <li className='Home-item'>
              <span className='Home-item-text'>
              Join a great community
              </span>
            </li>
          </ul>

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
