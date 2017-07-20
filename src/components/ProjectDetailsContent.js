
import React, { Component } from 'react';
import './ProjectDetails.css'
import Paper from 'material-ui/Paper';



class ProjectDetails extends Component {
    constructor() {
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
        const arrayPictures = this.props.project.images.map((picture) => {
            return (
                <img key={this.keyCount++} alt="" className="sub-images" src={picture} />
            )
        })
        return (
            <div className="project-details-column">
                {arrayPictures}
            </div>
        )
    }

    renderYoutube() {

        return (
            <div className="shadow">
                <div className="youtube-container" >
                    <iframe title="Youtube-Video" className="youtube" src={this.props.project.video} frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>
        );
    }


    render() {
        return (
            <div className="project-details-row">
                <img alt={this.props.project.projectTitle} className="thumbnail bounceIn" src={this.props.project.thumbnail} />
                <div className="project-details-column bounceIn">
                    {this.props.project.video === null ? null : this.renderYoutube()}
                    {this.renderProjectDescription()}
                </div>
                <div className="project-details-column bounceIn">
                    {this.renderProjectPictures()}
                </div>
            </div >
        )

    }

}



export default ProjectDetails;