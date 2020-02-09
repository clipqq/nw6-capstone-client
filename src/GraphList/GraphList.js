import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GraphList.css'
const { API_ENDPOINT } = require('../config')

class GraphList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userGraphs: [],
            jsxGraph: ''
        }
    }

    deleteGraph(id, e) {
        fetch(`${API_ENDPOINT}/data/${id}`, {
            method: 'DELETE',
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
            this.getUserGraphs()
        })
        .catch(error => {
            console.error(error)
        })
    }

    mapGraphs() {
        const { userGraphs } = this.state
        const graphs = userGraphs.map(graph => {
            return (
                <div className="listItem" key={graph.id}>
                    <p>Name: {graph.table_name}</p>
                    <p>Type: {graph.table_type}</p>
                    <div className="buttons">
                        <Link to={`/graph/${graph.table_type}/${graph.id}`}>
                            <button>View Graph</button>    
                        </Link> 
                        <button onClick={(e) => this.deleteGraph(graph.id, e)}>Delete</button>  
                    </div>
                </div>
            )
        })
        this.setState({jsxGraph:graphs})
    }

    getUserGraphs(){
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
            this.setState({userGraphs:data})
            this.mapGraphs()
        })
        .catch(error => {
            console.error(error)
        })
    }

    componentDidMount() {
        this.getUserGraphs()
    }
    
    render() {  
        return (
            <>
                <h2>GraphList</h2>
                <Link to={'/addGraph'}>
                    <button className="bigBtn">New Graph</button>
                </Link>
                <section className="listContainer"> {this.state.jsxGraph} </section>
            </>
        )
    }
}

export default GraphList
