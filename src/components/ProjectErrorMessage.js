import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ProjectDetails.css'



class ProjectErrorMessage extends Component {

    render() {
        return (
            <div className="project-details">
                <h1>WHOOPS THATS NOT A PROJECT!</h1>
                <Link to='/'>Click here to get back to a main page</Link>
            </div>
        )
    }
}



export default ProjectErrorMessage;