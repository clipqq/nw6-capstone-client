import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import config from '../config'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_email: '',
            password: '',
            user_name:'',
            error: ''

        }
        
        this.login=this.login.bind(this)
    }

    updateName(user_name) {
        this.setState({user_name: user_name});
    }

    updateEmail(user_email) {
        this.setState({user_email: user_email});
    }
    updatePassword(password) {
        this.setState({password: password});
    }
    login(e){
        console.log(this.state.user_name,'USERNAME')
        e.preventDefault();
        if(this.state.email==='' || this.state.password===''){
            this.setState({error: "Please add password and email"})
            return
        }
        const headers = new Headers ();
        headers.append('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify({
                user_name:this.state.user_name,
                user_email:this.state.user_email,
                password: this.state.password,
            }),
        };
        const request = new Request (`${config.API_ENDPOINT}/auth/login`, options)
        fetch(request)
        .then(res=>{
            if(!res.ok){
                throw res
            }
            return res.json()
        })
        .then(data => { 

            localStorage.setItem("authToken", data.authToken)
            this.props.history.push('/saved')
         })
         .catch(err => {
            if(err.status===400){
                this.setState({error: "INCORRECT USERNAME OR PASSWORD"})
            }
            })

    }


    render() {
        return (
            <div className="login">        {
                this.state.error !== "" && 
                <section id='error'>
                    {this.state.error}
                </section>
            }
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username
                    </label>
                    <input required type="username" name="username" id="username" placeholder="Username"
                    onChange={e => this.updateName(e.target.value)}
                    value={ this.state.user_name } 
                    onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email" placeholder="Email@url.com" value={ this.state.email } onChange={e => this.updateEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input required type="text" name="password" id="password" placeholder="Password" value={ this.state.password } onChange= {e => this.updatePassword(e.target.value)}/>
                    <div className="buttons">
                        <button  onClick={this.login}type="submit">
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