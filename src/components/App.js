import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppBar from '../containers/AppBarContainer'
import ProjectApp from './ProjectApp'
import ProjectDetails from '../containers/ProjectDetailsContainer'


class App extends Component {

	render() {
		return (
			<div className="App">
				<AppBar/>
				<div className="body-container">
					<Route exact path='/' component={ProjectApp}/>
					<Route exact path='/projects/:project' component={ProjectDetails}/>
				</div>
			</div>
		);
	}
}



export default App;