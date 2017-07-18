
import React, { Component } from 'react';
import './ProjectDetails.css'
import Paper from 'material-ui/Paper';



class ProjectDetails extends Component {
    constructor(){
        super()
        this.keyCount = 0;
    }
    renderProjectDescription() {

        const projectText = this.props.project.projectInfo.map((paragraph) => {
            return (
                <div key={this.keyCount++}>
                    <h3>{paragraph[0]}</h3><p>{paragraph[1]}</p>
                </div>
            )
        })


        return (
            <Paper className="paper">
                <h1>{this.props.project.projectTitle}</h1>
                {projectText}
            </Paper>
        )
    }
    renderProjectPictures() {
        return (
            <h1>A picture</h1>
        )
    }


    render() {
        console.log(this.props.project);
        return (
            <div className="project-details-row">
                <img alt={this.props.project.projectTitle} className="thumbnail" src={this.props.project.thumbnail} />
                <div className="project-details-column">
                    {this.renderProjectDescription()}
                </div>
                <div className="project-details-column">
                    {this.renderProjectPictures()}
                </div>
            </div >
        )

    }

}



export default ProjectDetails;