import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import './ProjectList.css'


class ProjectList extends Component{
    constructor(props){
        super(props);
        this.elementCount = 0;
    }
    
    componentDidMount(){
        this.props.setProjectState(false);
    }

    createProjectList(){
        const filteredProjects = this.props.projects.filter((project)=>{
            for(let i=0;i<this.props.tags.length;i++){
                const tag = this.props.tags[i];
                if(tag[2]===true){
                    //if the tag is not included
                    if(!project.tags.includes(tag[0])){
                        return false;
                    }
                }
            }
            return true;
        })

        return filteredProjects.map((project)=>{
            return(
                <ProjectCard key={this.elementCount++} project={project}/>
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