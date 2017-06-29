import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import './ProjectList.css'


class ProjectList extends Component{

    createProjectList(){
        return this.props.projects.map((project)=>{
            return(
                <ProjectCard key={project.id} project={project}/>
                )
        })
    }

    render(){
        return(
            <div className="project-list-container">
                {this.createProjectList()}
            </div>
        )
    }
}

export default ProjectList;