import React from 'react';
import Drawer from 'material-ui/Drawer';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import './Drawer.css'
import ReactTooltip from 'react-tooltip'





export default class DrawerUndockedExample extends React.Component {

	constructor(props){
		super(props);
		this.checkbox = {
    		margin: 12,
			width:'calc(100%-24px)'
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
		return this.props.tags.map((tag)=>{
			return(
				<div key={tag[0]}>
					<Checkbox checked={tag[2]} data-tip={tag[2]} label={tag[0]} disabled={tag[1]} style={this.checkbox} onCheck={()=>this.props.toggleTag(tag[0])}/>
					<ReactTooltip place="right" type="dark" effect="solid"/>
				</div>
			)
		})

		
	}
}