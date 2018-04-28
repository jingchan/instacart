import React from 'react';
import logo from '../assets/instacart-logo-color.png';
import './Home.css';

class Apply extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}
	
	handleSubmit = event => {
		event.preventDefault();
		
		console.log('submitted');
		window.location.href = '/background';
	}

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
		});
	}
	
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <a href='//instacart.com'><img src={logo} className="Home-logo" alt="logo" /></a>
        </div>
        <div className='Home-main'>
					<form onSubmit={this.handleSubmit}>
						<div><label htmlFor="first_name">First Name:</label> <input type='text' required value={this.state.value} onChange={this.handleChange} /></div>
						<div><label htmlFor="last_name">Last Name:</label> <input type='text' required value={this.state.value} onChange={this.handleChange} /></div>
						<div><label htmlFor="email">Email:</label> <input type='email' required value={this.state.value} onChange={this.handleChange} /></div>
						<div><label htmlFor="phone">Phone:</label> <input type='text' required value={this.state.value} onChange={this.handleChange} /></div>
						<input type='submit' onClick={this.handleSubmit}/>
					</form>
        </div>
      </div>
    );
  }
}

export default Apply;
