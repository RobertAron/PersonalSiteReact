import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';

import './AppBar.css'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class MyAppBar extends Component {

	mainPage = () => {
		console.log("loading main page...");
	}

	render() {
		return (
			<div className="app-bar">
				<AppBar
					onLeftIconButtonTouchTap={this.mainPage}
					style={{ position: 'fixed' }}
					title="Robert Aron"
					iconElementLeft={<IconButton><Back/></IconButton>}
				/>
			</div>
		);
	}
}
