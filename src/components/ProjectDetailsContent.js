
import React, { Component } from 'react';
import './ProjectDetails.css'
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { black, red900 } from 'material-ui/styles/colors';



class ProjectDetailsContent extends Component {
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
                    <iframe title="Youtube-Video" className="youtube" src={"https://www.youtube.com/embed/" + this.props.project.links.youtube} frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        );
    }

    renderSubLinks() {
        return (
            <div className="quick-link-menu">
                {this.props.project.links.github ?
                    <a target="_blank" rel="noopener noreferrer" href={this.props.project.links.github}>
                        <FontIcon className="fa fa-github quick-link" color={black} />
                    </a>
                    :
                    null
                }
                {this.props.project.links.youtube ?
                    <a target="_blank" rel="noopener noreferrer" href={this.props.project.links.youtube}>
                        <FontIcon className="fa fa-youtube quick-link" color={red900} />
                    </a>
                    :
                    null
                }
                {this.props.project.links.devpost ?
                    <a target="_blank" rel="noopener noreferrer" href={this.props.project.links.devpost}>
                        <img src='../../res/DevpostIcon.svg' alt="devpost" className="quick-link" />
                    </a>
                    :
                    null
                }
            </div>
        )
    }


    render() {
        return (
            <div className="project-details-row fadeIn">
                <div className="project-details-column">
                    <img alt={this.props.project.projectTitle} className="thumbnail" src={this.props.project.thumbnail} />
                    {this.renderSubLinks()}
                </div>
                <div className="project-details-column">
                    {this.props.project.links.youtube === undefined ? null : this.renderYoutube()}
                    {this.renderProjectDescription()}
                </div>
                <div className="project-details-column">
                    {this.renderProjectPictures()}
                </div>
            </div >
        )

    }

}



export default ProjectDetailsContent;