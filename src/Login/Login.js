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
<<<<<<< HEAD
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
                this.setState({error: "Incorrect username or password"})
            }
            })

    }

=======
    
>>>>>>> 2587543dbbf7368ee6d332e020695654120da4ff

    render() {
        return (
            <div className="login">        
                <h1>Login</h1>
                <div className="form-group">
                <label htmlFor="email">UserName:</label>
                    <input required type="text" name="user_name" id="user_name" value={ this.state.user_name } onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="email">Email:</label>
                    <input required type="email" name="email" id="email" value={ this.state.user_email } onChange={e => this.updateEmail(e.target.value)}/>
                    <label htmlFor="password">Password:</label>
                    <input required type="text" name="password" id="password" value={ this.state.password } onChange={e => this.updatePassword(e.target.value)}/>
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