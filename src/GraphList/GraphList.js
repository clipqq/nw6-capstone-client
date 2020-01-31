import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BarGraph from '../barGraph'
import './GraphList.css'

class GraphList extends Component {

    render() {
        return (
            <>        
                <h1> Users Graphs</h1>
                <div className="graphsContainer">
                    <div className="graph">
                        <BarGraph className="graphImg" />
                        <h2 className="graphName">Name</h2>
                    </div>
                    <div className="graph">
                        <BarGraph className="graphImg" />
                        <h2 className="graphName">Name</h2>
                    </div>
                    <div className="graph">
                        <BarGraph className="graphImg" />
                        <h2 className="graphName">Name</h2>
                    </div>
                    <div className="graph">
                        <BarGraph className="graphImg" />
                        <h2 className="graphName">Name</h2>
                    </div>
                    
                </div>
                <Link to={'/addGraph'} >
                    <button>New Graph</button>
                </Link>
            </>
        );
    }
}

export default GraphList;