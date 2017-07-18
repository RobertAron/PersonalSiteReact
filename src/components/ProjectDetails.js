import React, { Component } from 'react';
import './App.css';
import ProjectContent from './ProjectDetailsContent'
import ProjectErrorMessage from './ProjectErrorMessage'
import './ProjectDetails.css'



class ProjectDetails extends Component {
	componentDidMount() {
		this.props.setProjectState(true);
	}


	render() {
		//figure out if the project in the top of the bar is contained within the projects list
		const projectTitle = this.props.match.params.project;
		const projects = this.props.projects;
		const projectTitles = projects.map((project) => {
			return project.projectTitle;
		})
		if (projectTitles.includes(projectTitle)) {

			let selectedProject;
			for(let i=0;i<projects.length;i++){
				if(projects[i].projectTitle===projectTitle){selectedProject=projects[i]}
			}
			return (
				<div className="project-details">
					<ProjectContent project={selectedProject}/>
				</div>
			);
		}
		else {
			return (
				<div className="project-details">
					<ProjectErrorMessage />
				</div>
			)
		}
	}
}



export default ProjectDetails;