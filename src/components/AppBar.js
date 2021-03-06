import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './AppBar.css'
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom'
import NavRightButtons from './NavRightButtons'



class MyAppBar extends Component {
	
	leftIconDecider = ()=>{
		if (this.props.projectState){
			return <Link to='/'><IconButton iconStyle={this.props.muiTheme.raisedButton}><NavigationClose/></IconButton></Link>;
		}
		else{
			return <IconButton><Menu /></IconButton>;
		}
	}


	handleToggle = () => {
		if(!this.props.projectState)this.props.toggleDrawer();
	}

	render() {
		return (
			<div className="app-bar">
				<AppBar
					onLeftIconButtonTouchTap={this.handleToggle}
					style={{ position: 'fixed' }}
					title="Robert Aron"
					iconElementLeft={this.leftIconDecider()}
					iconElementRight={<NavRightButtons/>}
				/>
			</div>
		);
	}
}


export default muiThemeable()(MyAppBar);