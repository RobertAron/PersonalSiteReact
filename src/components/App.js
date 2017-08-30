import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppBar from '../containers/AppBarContainer'
import ProjectApp from './ProjectApp'
import ProjectDetails from '../containers/ProjectDetailsContainer'
import About from '../containers/AboutContainer'


class App extends Component {

	render() {
		return (
			<div className="app">
				<AppBar/>
				<div className="body-container">
					<Route exact path='/' component={ProjectApp}/>
					<Route exact path='/projects/:project' component={ProjectDetails}/>
					<Route exact path='/about' component={About}/>
				</div>
			</div>
		);
	}
}



export default App;