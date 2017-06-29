import React, { Component } from 'react';
import ProjectCard from './ProjectCard'


class ProjectList extends Component{

    createProjectList(){
        return this.props.projects.map((project)=>{
            console.log("making card with...")
            console.log(project)
            return(<ProjectCard project={project}/>)
        })
    }

    render(){
        return(
            <div>
                {this.createProjectList()}
            </div>
        )
    }
}

export default ProjectList;