import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppBar from '../containers/AppBarContainer'
import ProjectApp from './ProjectApp'
import ProjectDetails from '../containers/ProjectDetailsContainer'
import About from '../containers/AboutContainer'
import { withRouter} from 'react-router-dom';

function handleUpdate() {
    console.log("updating page");
    document.body.scrollTop = 0;    
}

class App extends Component {


	componentDidUpdate(prevProps) {
        
      if (this.props.location !== prevProps.location) {
		  this.scrollableContainer.scrollTop = 0;
      }
    }

	render() {
		return (
			<div className="app">
				<AppBar/>
				<div id="scrollableContainer" ref={(div) => { this.scrollableContainer = div; }} className="body-container">
					<Route exact path='/' onUpdate={handleUpdate} component={ProjectApp}/>
					<Route exact path='/projects/:project' onUpdate={handleUpdate} component={ProjectDetails}/>
					<Route exact path='/about' onUpdate={handleUpdate} component={About}/>
				</div>
			</div>
		);
	}
}



export default withRouter(App);