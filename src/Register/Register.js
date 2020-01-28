import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            confirm_password: ''
        }
    }

    updateEmail(email) {
        this.setState({email: email});
    }
    updateName(name) {
        this.setState({name: name});
    }
    updatePassword(password) {
        this.setState({password: password});
    }
    updateConfirmPassword(confirm_password) {
        this.setState({confirm_password: confirm_password});
    }

    render() {
        return (
            <div className="login">        
                <h1>Register</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input required type="email" name="email" id="email" value={ this.state.email } onChange={e => this.updateEmail(e.target.value)}/>
                    <label htmlFor="name">Name:</label>
                    <input required type="name" name="name" id="name" value={ this.state.name } onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="password">Password:</label>
                    <input required type="text" name="password" id="password" value={ this.state.password } onChange={e => this.updatePassword(e.target.value)}/>
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input required type="text" name="confirm_password" id="confirm_password" value={ this.state.confirm_password } onChange={e => this.updateConfirmPassword(e.target.value)}/>
                    <div className="buttons">
                        <button type="submit">
                            Register
                        </button>
                        <Link to='/'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;