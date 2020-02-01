import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactFileReader from 'react-file-reader'
const csv = require('csvtojson')
const { API_ENDPOINT } = require('../config')

class AddGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: []
        }
        this.updateData = this.updateData.bind(this);

    }

    updateTitle(title) {
        this.setState({title: title});
    }

    updateData(data) {
        console.log('update')
        this.setState({data: data})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addGraph(this.state.data, this.state.title)
    }


    // function (){
    //     this.doFetch().then(function(response){
    //         this.setState({
    //             the_message: response.message
    //         });
    //     }.bind(this))
    // }



    handleFiles = async (files) => {
        let reader = new FileReader();
        reader.onload = function(e) {
            const csvStr = reader.result
            csv()
                .fromString(csvStr)
                .then((jsonObj) => {
                        console.log(jsonObj);
                        this.setState({data: jsonObj})
                        console.log(this.state)
                    })
            }.bind(this)
        reader.readAsText(files[0]);
    }

    // onSearchSubmit = async (term) => {
    //     const response = await axios
    //       .get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //         Authorization: 'Client-ID'
    //       }
    //     })
    //   this.setState({ images: response.data.results });
    //   console.log('App this : ', this)
    //   }


    addGraph(data, title, cb) {
        console.log('add')
        fetch(`${API_ENDPOINT}`, {
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
                // this.props.routeProps.history.push('/graph')
                // cb(data)
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        return (
            <>        
                <h1>Add Graph</h1>
                <div className="login">        
                    <div className="form-group" >
                        <label htmlFor="title">Title:</label>
                        <input required type="title" name="title" id="title" value={ this.state.title } onChange={e => this.updateTitle(e.target.value)}/>
                        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                            <button className='btn'>Upload</button>
                        </ReactFileReader>
                        <div className="buttons">
                            <button type="submit" >
                                Create
                            </button>
                            <Link to='/graph'>
                                <button>Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddGraph;

// onClick={e => this.handleSubmit(e)}