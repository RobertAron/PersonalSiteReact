import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
	constructor(props) {
		super(props);
		this.imagesrc = "https://i.scdn.co/image/7fa9f83adc3efa7a984022bde0aac6a4b4eae404";
		this.projectTitle = "Test Title";
		this.projectInfo = "Here is a brief description of the thing and what it does. This continues on for a bit so that the length of the text goes off the card.";
	}

	componentDidMount() {
		console.log("in did mount");
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
				<img src={this.imagesrc} className="project-image"></img>
				<div className="project-title-area">
					<h2 className="project-title">{this.projectTitle}</h2>
					<div className="project-fab-container">
						<div className="project-fab animated">
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