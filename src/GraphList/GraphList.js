import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class GraphList extends Component {

    render() {
        return (
            <>        
                <h1>GraphList</h1>
                
                <Link to={'/addGraph'} >
                    <button>New Graph</button>
                </Link>
            </>
        );
    }
}

export default GraphList;