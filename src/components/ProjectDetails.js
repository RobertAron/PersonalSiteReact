import React, { Component } from 'react';
import './App.css';
import ProjectAppBar from './ProjectBar'
import ProjectContent from './ProjectDetailsContent'



class App extends Component {



	render() {
		return (
			<div className="App">
				<ProjectAppBar/>
                <ProjectContent/>
			</div>
		);
	}
}



export default App;