import React, { Component } from 'react';
import './App.css';
import ProjectContent from './ProjectDetailsContent'
import { Link } from 'react-router-dom'



class ProjectDetails extends Component {
	componentDidMount(){
		this.props.setProjectState(true);
	}


	render() {
		return (
			<div className="App">
				<ProjectContent />
				<h1>{this.props.match.params.project}</h1>
				<Link to="/">Test Link</Link>
			</div>
		);
	}
}



export default ProjectDetails;