import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import upload from '../img/upload.png'
import graph from '../img/graph.png'
import example from '../img/example.png'
import { IconContext } from "react-icons";
import { FaLongArrowAltRight } from 'react-icons/fa'

import './Landing.css'

class Landing extends Component {

    render() {

        return (
            <div className="land">        
                <h1>WTDD</h1>
                <h2>Tell a story with your data.</h2>
                <IconContext.Provider value={{ size: "200px", className: "arrow" }}>
                    <div className="icons">
                        <img src={upload} alt="upload" />
                        <FaLongArrowAltRight />
                        <img src={graph} alt="graph" />
                    </div>
                </IconContext.Provider>
                <h2> HOW IT WORKS</h2>
                <p>Upload your CSV file.</p>
                <p>Select your graph settings.</p>
                <p>Discover the story within your data.</p>
                <p>Share what you have discovered.</p>
                <h2>Demo User:</h2>
                <p>Username: demo</p>
                <p>Password: Password!1</p>
                <p>Sample CSV File: <a href='https://drive.google.com/uc?export=download&id=1POaXlsESvDLaWX1Z2BZl7kCwCx6L-fWp' download='demo.csv'>Download</a></p>
                <Link to={'/login'} >
                    <button className='bigBtn'> Get Started</button>
                </Link>
                <p>Download the sample CSV above or provide your own.</p>
                <p>CSV must be in the following format with 2 columns and X and Y headers.</p>
                <img src={example} alt='example CSV format'/>
            </div>
        );
    }
}

export default Landing;