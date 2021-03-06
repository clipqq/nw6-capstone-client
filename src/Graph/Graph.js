import React, { Component } from 'react'
import LineGraph from '../GraphTemplates/LineGraph'
import BarGraph from '../GraphTemplates/BarGraph'
import Scatterplot from '../GraphTemplates/Scatterplot'

class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: localStorage.getItem('userId'),
            tableId: this.props.match.params.graph_id,
            tableType: this.props.match.params.table_type,
        }
    }


    render() {
        if(this.state.tableType === 'line') {
            return (
                <>
                    <h1>Graph</h1>
                    <h2>Line Graph of your data</h2>
                    <LineGraph tableId={this.state.tableId} />
                </>
            )
        } else if (this.state.tableType === 'bar'){
            return (
                <>
                    <h1>Graph</h1>
                    <h2>Bar Graph of your data</h2>
                    <BarGraph tableId={this.state.tableId} />
                </>
            )
        } else {
            return (
                <>
                    <h1>Graph</h1>
                    <h2>Scatterplot of your data</h2>
                    <Scatterplot tableId={this.state.tableId} />
                </>
            )
        }
    }
}

export default Graph