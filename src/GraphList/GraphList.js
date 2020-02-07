import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LineGraph from '../GraphTemplates/LineGraph'
import BarGraph from '../GraphTemplates/BarGraph'
import Scatterplot from '../GraphTemplates/Scatterplot'
const { API_ENDPOINT } = require('../config')

class GraphList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userGraphs: [],
            jsxGraph: ''
        }
    }

    mapGraphs() {
        const { userGraphs } = this.state
        const graphs = userGraphs.map(graph => {
            return <Link key={graph.id} to={`/graph/${graph.table_type}/${graph.id}`}>Hello</Link>
        })
        console.log(graphs)
        this.setState({jsxGraph:graphs})
    }

    componentDidMount() {
        fetch(`${API_ENDPOINT}/data`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json', 
                'user_id': localStorage.userId
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            this.setState({userGraphs:data})
            this.mapGraphs()
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {  
        return (
            <>
                <h2>GraphList</h2>
                <Link to={'/addGraph'}>
                    <button className="bigBtn">New Graph</button>
                </Link>
                {this.state.jsxGraph}
            </>
        )
    }
}

export default GraphList
