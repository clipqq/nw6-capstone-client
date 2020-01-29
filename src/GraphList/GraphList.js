import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BarGraph from '../barGraph'
import './GraphList.css'

class GraphList extends Component {

    render() {
        return (
            <>        
                <h1>Graphs</h1>
                <div className="graphs">
                    <BarGraph />
                    <BarGraph />
                </div>
                <Link to={'/addGraph'} >
                    <button>New Graph</button>
                </Link>
            </>
        );
    }
}

export default GraphList;