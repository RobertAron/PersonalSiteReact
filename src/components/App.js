import React, { Component } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';



class App extends Component {

	projectCardArray(){
		console.log(this.props)
	}

	render() {
		return (
			<div className="App">
				<h1>FIRST COMMIT</h1>
				{this.projectCardArray()}
			</div>
		);
	}
}



export default App;