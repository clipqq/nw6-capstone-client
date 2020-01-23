import React from 'react'
import logo from './logo.svg'
import './App.css'
import BarGraph from './barGraph'
import Scatterplot from './scatterplot'

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1>Hello World! Welcome to WTDD!</h1>
            </header>
            <h2>Bargraph:</h2>
            <BarGraph />
            <h2>Scatterplot:</h2>
            <Scatterplot />
        </div>
    )
}

export default App
