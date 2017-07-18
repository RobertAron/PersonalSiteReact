
import React, { Component } from 'react';

class ProjectDetails extends Component {


    render() {
        console.log(this.props.project);
        return (

            <div>
                <h1>Hello World From Details Content</h1>
                <h2>{this.props.project.projectTitle}</h2>
            </div>
        )

    }

}



export default ProjectDetails;