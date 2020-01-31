import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
import Landing from './Landing/Landing'
import AddGraph from './AddGraph/AddGraph'
import EditGraph from './EditGraph/EditGraph'
import GraphList from './GraphList/GraphList'
import Graph from './Graph/Graph'
import Login from './Login/Login'
import Register from './Register/Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component={Header} />
      </header>
      <ErrorBoundry>
        <main className="container">
          <Route exact path='/' component={Landing} />
          <Route exact path='/graph' component={GraphList} />
          <Route exact path='/graph/:graph_id' component={Graph} />
          <Route exact path='/addGraph' component={AddGraph} />
          <Route exact path='/editGraph' component={EditGraph} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </main>
      </ErrorBoundry>
      <footer className="App-footer">
        <Route path='/' component={Footer} />
      </footer>
    </div>
  );

}

export default App
