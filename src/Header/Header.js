import React, { Component } from 'react';
import { Link }from 'react-router-dom'
import './Header.css'

class Header extends Component {

    render() {

        return (
            <>     
                <Link to={'/'} className="logo" >  
                    <h1>WTDD</h1>
                </Link> 
                <div className="buttons">
                    <Link to={'/login'} >
                        <button>
                            Log in
                        </button>
                    </Link>
                    <Link to={'/register'} >
                        <button>
                            Register
                        </button>
                    </Link>
                </div>
            </>
        );
    }
}

export default Header;