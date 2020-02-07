import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    LabelSeries,
} from 'react-vis'
import { validateData } from './GraphUtils/csvUtils'
const { API_ENDPOINT } = require('../config')

export default class BarGraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableId: this.props.tableId,
            userId: localStorage.getItem('userId'),
            tableName: 'NA',
            dataResult: [{x:1},{y:1}],
        }

        console.log('inside LineGraph', this.props)
    }
    // const dataArr = props.data.map((d)=> {
    //     return {x: d.year + '/' + d.quarter,
    //     y: parseFloat(d.count/1000)}
    // });

    // KEY USER PARAMETERS
    // stroke
    // strokeWidth


    updateState = (data, table) => {
        this.setState({
            dataResult: validateData(data),
            tableName: table,
        })
        console.log('updated state', this.state)
    }
    componentDidMount = () => {
        fetch(`${API_ENDPOINT}/data/${this.state.tableId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                user_id: this.state.userId,
            },
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(res => {
                this.updateState(res.data, res.table_name)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        console.log('state in render', this.state)
        const sampleData = [
            { "x": 0, "y": 8 },
            { "x": 1, "y": 5 },
            { "x": 2, "y": 4 },
            { "x": 3, "y": 9 },
            { "x": 4, "y": 1 },
            { "x": 5, "y": 7 },
            { "x": 6, "y": 6 },
            { "x": 7, "y": 3 },
            { "x": 8, "y": 2 },
            { "x": 9, "y": 0 },
        ]

        console.log('final data state', this.state.dataResult)

        return (
            <div>
                <h3>Bar Graph Project: {this.state.tableName}</h3>

                <XYPlot height={300} width={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    {/* <LineSeries data={sampleData} style={{ fill: 'none' }} /> */}
                    <VerticalBarSeries
                        data={this.state.dataResult}
                        style={{ fill: 'none' }}
                    />
                </XYPlot>
            </div>
        )
    }
}
