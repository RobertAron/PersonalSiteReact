import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Close from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import './Drawer.css'


export default class DrawerUndockedExample extends React.Component {

	constructor(props) {
		super(props);
	}


	handleToggle = () => {
		this.props.toggleDrawer();
	}

	handleClose = () => {
		this.props.toggleDrawer();
	}


	render() {
		const placeLast = {
			position: 'absolute',
			bottom: 0,
			left: 0
		}
		return (
			<div>
				<Drawer
					docked={false}
					width={200}
					open={this.props.open}
					onRequestChange={(open) => this.props.toggleDrawer()}
				>
					<h1 className="center">Filters</h1>
					<Divider/>

					<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
					<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
					<IconButton
						style={placeLast}
						onTouchTap={this.handleClose}
					>
						<Close />
					</IconButton>
				</Drawer>
			</div>
		);
	}
}