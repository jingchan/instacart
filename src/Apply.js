import React from 'react';
import Header from './Header';
import './Home.css';
import './Apply.css';

class Apply extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this.form = React.createRef();

	}
	handleCancel = event => {
		window.history.back();
	}

	// handleKeyDown = event => {
	// 	// this.handleSubmit();
	// 	if(event.keyCode === 13){
	// 		event.preventDefault();
	// 		if(this.form && this.form.current){
	// 			this.form.current.submit();
	// 		}
	// 	}
	// }

	handleSubmit = event => {
		event.preventDefault();
		fetch('/apply', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(this.state),
		})
		.then(res => res.json())
		.then(res => {
			if(res && res.status === 'success'){
				window.location.href = `/background?email=${this.state.email}`;
			}
		})
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
        <Header />
        <div className='Home-main'>
					<form onSubmit={this.handleSubmit} ref={this.form}>
					<h2 className='Home-title'>Shopper Information</h2>
          <p className='Home-text'>Tell us a little about yourself</p>
					<ul className='Apply-form-list'>
						<li className='Apply-form-item'>
							<label htmlFor="first_name">First Name:</label> 
							<input name='first_name' className='Apply-form-input' type='text' required value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} autoFocus={true}/>
						</li>
						<li className='Apply-form-item'>
							<label htmlFor="last_name">Last Name:</label> 
							<input name='last_name' className='Apply-form-input' type='text' required value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
						</li>
						<li className='Apply-form-item'>
							<label htmlFor="email">Email:</label> 
							<input name='email' className='Apply-form-input' type='email' required value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
						</li>
						<li className='Apply-form-item'>
							<label htmlFor="phone">Phone:</label> 
							<input name='phone' className='Apply-form-input' type='text' required value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
						</li>
					</ul>
					<div>
						<div className='Home-buttons'>
							<a className='Home-button' onClick={this.handleCancel}>Cancel</a>
							<button type='submit' className='Home-button Home-ok'>Continue</button>
						</div>
					</div>
					</form>
        </div>
      </div>
    );
  }
}

export default Apply;
