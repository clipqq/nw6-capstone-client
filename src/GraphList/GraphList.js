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
            results: [],
        }
    }

    componentDidMount() {

        fetch(`${API_ENDPOINT}/data`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json', 
                'user_id': localStorage.userId
                
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('something went wrong')
                }
            })
            .then(response =>
                this.setState({
                    results: 
                    response.filter(r => {
                        return r.table_name === 'JavaScript'
                    })    
                })          
            )
    }
    
    render() {
        const { results } = this.state

        return (
            <>
                <h2>GraphList</h2>
                <Link to={'/addGraph'}>
                    <button className="bigBtn">New Graph</button>
                </Link>

                <Link to={'/addGraph'}>
                    <button>New Graph</button>
                </Link>
            </>
        )
    }
}

export default GraphList
