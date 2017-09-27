import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppBar from '../containers/AppBarContainer'
import ProjectApp from './ProjectApp'
import ProjectDetails from '../containers/ProjectDetailsContainer'
import About from '../containers/AboutContainer'

function handleUpdate() {
    console.log("updating page");
    document.body.scrollTop = 0;    
}

class App extends Component {

	render() {
		return (
			<div className="app">
				<AppBar/>
				<div className="body-container">
					<Route exact path='/' onUpdate={handleUpdate} component={ProjectApp}/>
					<Route exact path='/projects/:project' onUpdate={handleUpdate} component={ProjectDetails}/>
					<Route exact path='/about' onUpdate={handleUpdate} component={About}/>
				</div>
			</div>
		);
	}
}



export default App;