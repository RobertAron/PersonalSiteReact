import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class ProjectErrorMessage extends Component {

    render() {
        return (
            <div>
                <h1>WHOOPS THATS NOT A PROJECT!</h1>
                <Link to='/'>Lets get out of here</Link>
            </div>
        )
    }
}



export default ProjectErrorMessage;