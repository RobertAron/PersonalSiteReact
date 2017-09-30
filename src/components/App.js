import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppBar from '../containers/AppBarContainer'
import ProjectApp from './ProjectApp'
import ProjectDetails from '../containers/ProjectDetailsContainer'
import About from '../containers/AboutContainer'
import { withRouter} from 'react-router-dom';



class App extends Component {

	componentDidUpdate(prevProps) {
        
      if (this.props.location !== prevProps.location) {
		window.scrollTo(0,0);
      }
    }

	render() {
		return (
			<div id="app" className="app">
				<AppBar/>
				<div id='scrollableContainer' ref='scrollableContainer' className="body-container">
					<Route exact path='/' component={ProjectApp} params={this.scrollableContainer}/>
					<Route exact path='/projects/:project' component={ProjectDetails}/>
					<Route exact path='/about' component={About}/>
				</div>
			</div>
		);
	}
}



export default withRouter(App);