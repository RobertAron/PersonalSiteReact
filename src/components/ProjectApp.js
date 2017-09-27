import React, { Component } from 'react';
import ProjectList from '../containers/ProjectListContainer'
import Drawer from '../containers/DrawerContainer'




class ProjectApp extends Component {



    render() {
        return(
            <div>
                <Drawer />
                <ProjectList />
            </div>
        )
    }


}

export default ProjectApp