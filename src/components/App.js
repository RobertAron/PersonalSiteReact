import React, { Component } from 'react';
import './App.css';
import ProjectList from '../containers/ProjectListContainer'
import Drawer from './Drawer'



class App extends Component {



	render() {
		return (
			<div className="App">
				<Drawer open={true}/>
				<ProjectList/>
			</div>
		);
	}
}



export default App;