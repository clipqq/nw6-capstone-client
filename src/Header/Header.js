import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    isUserLoggedIn() {
        let buttons;
        if (!localStorage.getItem("userId")) {
            buttons =   <div className="buttons">
                            <Link to={'/login'}>
                                <button>
                                    Log in
                                </button>
                            </Link>
                            <Link to={'/register'}>
                                <button>
                                    Register
                                </button>
                            </Link>
                        </div>
        } else {
            buttons =   <div className="buttons">
                            <Link to={'/login'}>
                                <button onClick={this.clearLocalStorage}>
                                        Log out
                                </button>
                            </Link>
                        </div>
        }
        return buttons
    }

    clearLocalStorage() {
        localStorage.removeItem("authToken")
        localStorage.removeItem("userId")
    }

    render() {
        return (
            <>     
                <Link to={'/graph'} className="logo" >  
                    <h1>WTDD</h1>
                </Link> 
                {this.isUserLoggedIn()}
            </>
        );
    }
}

export default Header;