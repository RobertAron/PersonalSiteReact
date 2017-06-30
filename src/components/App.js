import React, { Component } from 'react';
import './App.css';
import ProjectList from '../containers/ProjectListContainer'
import Drawer from '../containers/DrawerContainer'
import AppBar from './AppBar'



class App extends Component {



	render() {
		return (
			<div className="App">
				<AppBar/>
				<Drawer open={true}/>
				<ProjectList/>
			</div>
		);
	}
}



export default App;