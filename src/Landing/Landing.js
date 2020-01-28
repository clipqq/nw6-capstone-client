import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import upload from '../img/upload.png'
import graph from '../img/graph.png'
import { IconContext } from "react-icons";
import { FaLongArrowAltRight } from 'react-icons/fa'
import './Landing.css'

class Landing extends Component {

    render() {

        return (
            <>        
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
                <Link to={'/graph'} >
                    <button> Get Started</button>
                </Link>
            </>
        );
    }
}

export default Landing;