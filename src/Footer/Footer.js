import React, { Component } from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import './Footer.css';

class Footer extends Component {

    render() {

        return (
            <>   
            <div className="footer">  
                <p class="copywriter">&copy; 2020 WTDD</p>
                
                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" ><i class="fa"></i><FaFacebook/></a>
                    <a href="google.com"><i class="fa"  target="_blank" rel="noopener noreferrer"></i><IoLogoTwitter/></a>
                    <a href="google.com"><i class="fa"  target="_blank" rel="noopener noreferrer"></i><FaInstagram/></a>
                </div>
            </div>
            </>
        );
    }
}

export default Footer;