import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LineGraph from '../GraphTemplates/LineGraph'
import ScatterAnimation from '../GraphTemplates/ScatterAnimation'
import ZoomableChart from '../GraphTemplates/zoomChart'


const API_URL = 'https://nataliia-radina.github.io/react-vis-example/'

class GraphList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    // console.log(response)
                    return response.json()
                } else {
                    throw new Error('something went wrong')
                }
            })
            .then(response =>
                this.setState({
                    results: response.results.filter(r => {
                        return r.name === 'JavaScript'
                    }),
                }),
            )
    }

    render() {
        const { results } = this.state

        return (
            <>
                <h1>GraphList</h1>

                <h2>API Line Graph</h2>
                <LineGraph data={results} />
                {/* <h2>API Graph</h2>
                <h2>API Graph</h2> */}


                <h2>Scatter Animation</h2>
                <ScatterAnimation  />

                <h2>Scatter Animation</h2>
                <ZoomableChart />

                <Link to={'/addGraph'}>
                    <button>New Graph</button>
                </Link>
            </>
        )
    }
}

export default GraphList
