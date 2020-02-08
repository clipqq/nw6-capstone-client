import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
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
            dataResult: [],
        }
    }

    updateState = (data, table) => {
        this.setState({
            dataResult: validateData(data),
            tableName: table,
        })
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
        return (
            <div>
                <h3>Bar Graph Project: {this.state.tableName}</h3>

                <XYPlot height={300} width={375} margin={{ left: 75, bottom: 75}} >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis
                        style={{
                            line: {stroke: 'black'},
                            ticks: { stroke: 'black' },
                        }}
                        tickLabelAngle={-45}
                    />
                    <YAxis
                        style={{
                            line: {stroke: 'black'},
                            ticks: { stroke: 'black' },
                        }}
                        tickLabelAngle={-45}
                    />
                    <VerticalBarSeries
                        data={this.state.dataResult}
                        style={{ fill: 'none' }}
                    />
                </XYPlot>
            </div>
        )
    }
}
