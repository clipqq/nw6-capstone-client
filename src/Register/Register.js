import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import config from '../config'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_email: '',
            name: '',
            password: '',
            user_name:'',
            confirm_password: ''
        }
       
    }

    updateEmail(user_email) {
        this.setState({user_email: user_email});
    }
    updateName(user_name) {
        this.setState({user_name: user_name});
    }
    updatePassword(password) {
        this.setState({password: password});
    }
    updateConfirmPassword(confirm_password) {
        this.setState({confirm_password: confirm_password});
    }
    addUser= (e) =>{
        e.preventDefault();
        if(this.state.user_email==='' || this.state.password===''){
            this.setState({error: "Please add password and user_email"})
            return
        }
        const headers = new Headers ();
        headers.append('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                user_name: this.state.user_name,
                user_email: this.state.user_email,
                password: this.state.password,
            }),
        };
        const request = new Request (`${config.API_ENDPOINT}/user`, options)
        fetch(request)
        .then(res=>{
            if(!res.ok){
                throw res
            }
            return res.json()
        })
        .then(data=>
            this.props.history.push("/login")
        )
        .catch(err => {
            if(err.status===400){
                this.setState({error: "email already taken"})
            }
            })
    }
    render() {
        return (
            <div className="login">        
                <h1>Register</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input required type="email" name="email" id="email" value={ this.state.user_email } onChange={e => this.updateEmail(e.target.value)}/>
                    <label htmlFor="name">Name:</label>
                    <input required type="name" name="name" id="name" value={ this.state.user_name } onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="password">Password:</label>
                    <input required type="text" name="password" id="password" value={ this.state.password } onChange={e => this.updatePassword(e.target.value)}/>
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input required type="text" name="confirm_password" id="confirm_password" value={ this.state.confirm_password } onChange={e => this.updateConfirmPassword(e.target.value)}/>
                    <div className="buttons">
                        <button type="submit" onClick={this.addUser}>
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