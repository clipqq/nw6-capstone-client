import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries,
} from 'react-vis'

export default class LineGraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArr: this.props.data,
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

    componentDidMount = () => {
        this.setState({
            title: this.props.tableName,
            dataArr: this.props.data,
        })
        console.log('after didmount ', this.state)
    }
    render() {
        console.log('in render',this.state.dataArr)
        const sampleData = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 2 },
            { x: 9, y: 0 },
        ]

        return (
            <div>
                <XYPlot height={300} width={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    {/* <LineSeries data={this.state.dataArr} style={{ fill: 'none' }} /> */}
                    <LineSeries data={sampleData} style={{ fill: 'none' }} />
                </XYPlot>
                {this.state.dataArr}
            </div>
        )
    }
}
