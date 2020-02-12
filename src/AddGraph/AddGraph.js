import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactFileReader from 'react-file-reader'
import './AddGraph.css'
const csv = require('csvtojson')
const { API_ENDPOINT } = require('../config')

class AddGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            type: 'line',
            data: [],
        }
    }

    updateTitle(title) {
        this.setState({ title: title })
    }

    updateType(type) {
        this.setState({ type: type })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.addGraph(this.state.data, this.state.title, this.state.type)
    }

    handleFiles = async files => {
        let reader = new FileReader()
        reader.onload = function(e) {
            const csvStr = reader.result
            csv()
                .fromString(csvStr)
                .then(jsonObj => {
                    this.setState({ data: JSON.stringify(jsonObj) })
                })
        }.bind(this)
        reader.readAsText(files[0])
    }

    addGraph(data, title, type) {
        fetch(`${API_ENDPOINT}/data`, {
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/json',
                user_id: localStorage.getItem('userId'),
                table_name: title,
                table_type: type,
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
            .then(data => {
                this.props.routeProps.history.push('/graph')
            })
            .catch(error => {
                console.error(error)
            })
    }

    componentDidMount() {
        if (!localStorage.getItem('userId')) {
            this.props.routeProps.history.push('/')
        }
    }

    render() {
        return (
            <>
                <h2>Add Graph</h2>
                <div className="login">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            required
                            type="title"
                            name="title"
                            id="title"
                            onChange={e => this.updateTitle(e.target.value)}
                        />
                        <label htmlFor="type">Type:</label>
                        <select
                            required
                            type="type"
                            name="type"
                            id="type"
                            onChange={e => this.updateType(e.target.value)}
                        >
                            <option defaultValue value="line">
                                Line
                            </option>
                            <option value="bar">Bar</option>
                            <option value="scatter">Scatter</option>
                        </select>
                        <label htmlFor="file">File:</label>
                        <ReactFileReader
                            handleFiles={this.handleFiles}
                            fileTypes={'.csv'}
                        >
                            <button className="btn">Upload</button>
                        </ReactFileReader>
                        <div className="buttons">
                            <button
                                type="submit"
                                onClick={e => this.handleSubmit(e)}
                            >
                                Create
                            </button>
                            <Link to="/graph">
                                <button>Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AddGraph
