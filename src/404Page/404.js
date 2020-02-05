import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactFileReader from 'react-file-reader'
const csv = require('csvtojson')
const { API_ENDPOINT } = require('../config')

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: []
        }
    }

    updateTitle(title) {
        this.setState({title: title});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addGraph(this.state.data, this.state.title)
    }

    handleFiles = async (files) => {
        let reader = new FileReader();
        reader.onload = function(e) {
            const csvStr = reader.result
            csv()
                .fromString(csvStr)
                .then((jsonObj) => {
                        this.setState({data: JSON.stringify(jsonObj)})
                    })
            }.bind(this)
        reader.readAsText(files[0]);
    }


    addGraph(data, title) {
        fetch(`${API_ENDPOINT}/data`, {
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/json',
                'user_id': 1,
                'table_name': title
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
                this.props.history.push('/graph')
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        return (
            <>   <br></br>                
               <br></br>     
 
                <h2>404 NOT FOUND</h2>
                
            </>
        );
    }
}

export default NotFound;