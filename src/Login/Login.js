import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
const { API_ENDPOINT } = require('../config')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            user_name:'',
            error: ''
        }
    }

    updateName(user_name) {
        this.setState({user_name: user_name});
    }
    updatePassword(password) {
        this.setState({password: password});
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            user_name: this.state.user_name,
            password: this.state.password
        }
        this.loginUser(JSON.stringify(user))
    }

    loginUser(user) {
        fetch(`${API_ENDPOINT}/auth/login`, {
            method: 'POST',
            body: user,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=>{
            if(!res.ok){
                throw res
            }
            return res.json()
        })
        .then(data => { 
            localStorage.setItem("authToken", data.authToken)
            localStorage.setItem("userId", data.user_id)
            this.props.routeProps.history.push('/graph')
        })
        .catch(err => {
            if(err.status===400){
                this.setState({error: "INCORRECT USERNAME OR PASSWORD"})
            }
        })
    }

    componentDidMount() {
        if (localStorage.getItem('userId')) {
            this.props.routeProps.history.push('/graph')
        } 
    }

    render() {
        return (
            <div className="login">        
                {this.state.error !== "" && 
                    <section id='error'>
                        {this.state.error}
                    </section>}
                <h2>Login</h2>
                <form className="form-group" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="name">Username</label>
                    <input required type="name" name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input required type="password" name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>
                    <div className="buttons">
                        <button  onClick={this.login} type="submit">
                            Login
                        </button>
                        <Link to='/'>
                            <button>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;