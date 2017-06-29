import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props);
		this.imageSrc = this.props.project.imageSrc;
		this.projectTitle = this.props.project.projectTitle;
		this.projectInfo = this.props.project.projectInfo;
	}

	componentDidMount() {
		const containers = document.querySelectorAll('.project-description');
		Array.prototype.forEach.call(containers, (container) => {  // Loop through each container
			var p = container.querySelector('p');
			var divh = container.clientHeight;
			while (p.offsetHeight > divh) { // Check if the paragraph's height is taller than the container's height. If it is:
				p.textContent = p.textContent.replace(/\W*\s(\S)*$/, '...'); // add an ellipsis at the last shown space
			}
		})
	}

	render() {
		return (
			<div className="project-card animated bounceIn">
				<img alt={this.projectTitle} src={this.imageSrc} className="project-image"></img>
				<div className="project-title-area">
					<h2 className="project-title">{this.projectTitle}</h2>
					<div className="project-fab-container">
						<div className="project-fab fast-animated">
							{/*TODO replace with menu/icon menu*/}
							<i className="material-icons">more_vert</i>
						</div>
					</div>
				</div>
				<div className="project-description">
					<p className="line-clamp">
						{this.projectInfo}
					</p>
				</div>
			</div>
		);
	}
}

export default ProjectCard;