import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    updateEmail(email) {
        this.setState({email: email});
    }
    updatePassword(password) {
        this.setState({password: password});
    }

    render() {

        return (
            <div className="login">        
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input required type="email" name="email" id="email" value={ this.state.email } onChange={e => this.updateEmail(e.target.value)}/>
                    <label htmlFor="password">Password:</label>
                    <input required type="text" name="password" id="password" value={ this.state.password } onChange={e => this.updatePassword(e.target.value)}/>
                    <div className="buttons">
                        <button type="submit">
                            Login
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

export default Login;