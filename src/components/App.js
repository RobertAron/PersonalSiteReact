import React, { Component } from 'react';
import './App.css';
import ProjectList from '../containers/ProjectListContainer'
import Drawer from '../containers/DrawerContainer'
import AppBar from '../containers/AppBarContainer'



class App extends Component {



	render() {
		return (
			<div className="App">
				<AppBar/>
				<Drawer/>
				<ProjectList/>
			</div>
		);
	}
}



export default App;