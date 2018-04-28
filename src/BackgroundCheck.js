import React from 'react';
import logo from '../assets/instacart-logo-color.png';
import './Home.css';

class BackgroundCheck extends React.Component {
	onSubmit = () => {
		console.log('submitted');
	}

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <a href='//instacart.com'><img src={logo} className="Home-logo" alt="logo" /></a>
        </div>

        <div className='Home-main'>
            Do you agree to a background check?
        </div>
      </div>
    );
  }
}

export default BackgroundCheck;
