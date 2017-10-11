import React, { Component } from 'react';
import './About.css'
import FontIcon from 'material-ui/FontIcon';
import {black, red900} from 'material-ui/styles/colors';



class About extends Component{
    constructor(props){
        super(props);
        this.props.setProjectState(true);
    }
    render(){
        return(
            <div className="about animated">
                <div className="images">
                    <img src="../../res/self-image.jpg" alt="self-portrait" className="my-image"/>
                    <div className="quick-link-menu">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/RobertAron">
                            <FontIcon className="fa fa-github quick-link" color={black}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/HeyImRige">
                            <FontIcon className="fa fa-youtube quick-link" color={red900} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/RobertAron">
                            <img src='../../res/DevpostIcon.svg' alt="devpost" className="quick-link"/>
                        </a>
                    </div>
                </div>
                <div className="about-info">
                    <h1>About</h1>
                    <h3>Let Me Introduce Myself</h3>
                    <p>My name is Robert Aron and as you may have noticed I love working on projects. I am currently a student at the University of Texas at Arlington. In the december, I will graduate with a degree in Software Engineering and Music Media. My ideal position is working with motivated individuals on large projects.</p>
                    <h3>Software</h3>
                    <p>Through personal project and university activities, I have experience developing frontend and backend systems. Systems I have front end experience include Web, Android, and Native windows through the use of JUCE and OpenGL. I have worked on a variety of backend systems including Parse, Firebase, Node, SQL, and MongoDB.</p>
                    <h3>Audio</h3>
                    <p>My passion for audio engineering has led me to work on a variety of projects and gain experience in many audio related films. Through the Dallas film crew, I have gained experience ranging from being a boom operator to film composer. University positions have allowed me to gain professional studio experience recording a variety of bands and styles ranging from full orchestral choirs to standard rock bands. Through university classes and personal projects, I have learned digital signal processing techniques and worked to develop my own VST plugins.</p>
                </div>
            </div>
        )
    }
}



export default About;