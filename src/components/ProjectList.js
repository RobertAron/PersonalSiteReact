import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import './ProjectList.css'


class ProjectList extends Component{

    createProjectList(){
        const filteredProjects = this.props.projects.filter((project)=>{
            for(let i=0;i<this.props.tags.length;i++){
                const tag = this.props.tags[i];
                console.log("checking tag",tag)
                if(tag[2]==true){
                    //if the tag is not included
                    console.log("comparing",tag[2],"and",project.tags)
                    if(!project.tags.includes(tag[0])){
                        return false;
                    }
                }
            }
            console.log("returning true");
            return true;
        })
        console.log(filteredProjects);

        return filteredProjects.map((project)=>{
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