import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './AppBar.css'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class MyAppBar extends Component {
	constructor(props) {
		super(props);
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
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</div>
		);
	}
}
