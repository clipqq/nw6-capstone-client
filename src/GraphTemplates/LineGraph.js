import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const LineGraph = (props) => {

    const dataArr = props.data.map((d)=> {
        return {x: d.year + '/' + d.quarter, 
        y: parseFloat(d.count/1000)}
    });

    // KEY USER PARAMETERS
    // stroke
    // strokeWidth


    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Period of time(year and quarter)" />
            <YAxis title="Number of pull requests (thousands)" />
                <LineSeries
                    data={dataArr}
                    style={{
                        stroke: 'red', 
                        strokeWidth: 3,
                        fill: 'none'
                        }}                   
                        
                        />
        </XYPlot>
    );
}

export default LineGraph;
