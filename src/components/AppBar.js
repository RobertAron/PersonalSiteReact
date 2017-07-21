import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './AppBar.css'
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import EmailDialog from './EmailDialog'



export default class MyAppBar extends Component {

	leftIconDecider = ()=>{
		if (this.props.projectState){
			return <IconButton href="/"><NavigationClose /></IconButton>;
		}
		else{
			return <IconButton><Menu /></IconButton>;
		}
	}


	handleToggle = () => {
		this.props.toggleDrawer();
	}

	render() {
		return (
			<div className="app-bar">
				<AppBar
					onLeftIconButtonTouchTap={this.handleToggle}
					style={{ position: 'fixed' }}
					title="Robert Aron"
					iconElementLeft={this.leftIconDecider()}
					iconElementRight={<EmailDialog/>}
				/>
			</div>
		);
	}
}
