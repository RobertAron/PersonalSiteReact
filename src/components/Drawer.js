import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Close from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import './Drawer.css'





export default class DrawerUndockedExample extends React.Component {

	constructor(props){
		super(props);
		this.checkbox = {
    		margin: 12
  		}
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

					{this.createFilterList()}
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



	createFilterList(){
		const possibleFilters = ["test1","test2"];
		return possibleFilters.map((filter)=>{
            return(
                <Checkbox key={filter} label={filter} style={this.checkbox}/>
                )
        })
	}
}