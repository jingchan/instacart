import React from 'react';
import Header from './Header';
import './Home.css';

class Confirm extends React.Component {
	handleReturn = event => {
    window.location.href = '/';
	}

  render() {
    return (
      <div className="Home">
        <Header />
        <div className='Home-main'>
          <h2 className='Home-title'>Confirmation</h2>
          <div className='Home-text'>Thank you for applying to become a shopper!  We will get back to you soon!</div>
          <div className='Home-buttons'>
              <button className='Home-button Home-ok' onClick={this.handleReturn}>Finish</button>
            </div>
        </div>
      </div>

    );
  }
}

export default Confirm;
