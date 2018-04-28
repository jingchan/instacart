import React from 'react';
import Header from './Header';
import './Home.css';
import './BackgroundCheck.css';

class BackgroundCheck extends React.Component {

  handleBack = () => {
    window.history.back();
  }
  
	handleAgree = event => {
    event.preventDefault();
    let data = {
      user: window.location.search.substr(1),
      message: 'agree'
    }
		fetch('/background', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data),
		})
		.then(res => res.json())
		.then(res => {
			if(res && res.status === 'success'){
				window.location.href = '/confirm';
			}
		})
	}

  render() {
    return (
      <div className="Home">
        <Header />

        <div className='Home-main'>
          <h2 className='Home-title'>Background Check</h2>
          <div className='Home-text'>Do you agree to a background check?</div>

          <div className='Home-buttons'>
            <a className='Home-button' onClick={this.handleBack}>Back</a>
            <button className='Home-button Home-ok' onClick={this.handleAgree}>I Agree</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BackgroundCheck;
