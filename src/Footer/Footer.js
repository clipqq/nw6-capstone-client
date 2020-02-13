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
                <p className="copywriter">&copy; 2020 WTDD</p>
                
                <div className="icons">
                    <a href="https://www.facebook.com/wtdd.capstone.5" target="_blank" rel="noopener noreferrer" ><i ></i><FaFacebook/></a>
                    <a href="https://twitter.com/WTDD19"><i target="_blank" rel="noopener noreferrer"></i><IoLogoTwitter/></a>
                    <a href="https://www.instagram.com/wtdd19/"><i target="_blank" rel="noopener noreferrer"></i><FaInstagram/></a>
                </div>
            </div>
            </>
        );
    }
}

export default Footer;