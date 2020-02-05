import React, { Component } from 'react'
import LineGraph from '../GraphTemplates/LineGraph'
// const { API_ENDPOINT } = require('../config')

class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: localStorage.getItem('userId'),
            tableId: this.props.match.params.graph_id,
            dataResult: [],
        }
        console.log('graph id from params',this.props.match.params.graph_id)
    }

    // updateState = (data, table) => {
    //     this.setState({
    //         dataResult: data,
    //         tableName: table,
    //     })
    //     console.log('graph state', this.state)
    // }
    // componentDidMount = () => {
    //     fetch(`${API_ENDPOINT}/data/${this.state.tableId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             user_id: this.state.userId,
    //         },
    //     })
    //         .then(res => {
    //             if (!res.ok) {
    //                 return res.json().then(error => {
    //                     throw error
    //                 })
    //             }
    //             return res.json()
    //         })
    //         .then(res => {
    //             this.updateState(res.data, res.table_name)
    //             console.log('props passed', this.state)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }

    render() {
        return (
            <>
                <h1>Graph</h1>
                <h2>Line Graph* of your data</h2>
                <p>* this should return graph type from server</p>

                <LineGraph tableId={this.state.tableId} />
            </>
        )
    }
}

export default Graph
