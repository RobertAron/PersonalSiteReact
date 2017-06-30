import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
  }

  handleToggle = () => {
    console.log("in handle Toggle");
    this.props.toggleDrawer(!this.props.open);
  }

  handleClose = () => {
    console.log("wtf");
    this.props.toggleDrawer(false);
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={(open) => this.props.toggleDrawer(open)}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}