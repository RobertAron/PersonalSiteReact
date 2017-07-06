import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './ProjectCard.css';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import "./Popover.css"
import FontIcon from 'material-ui/FontIcon';

export default class PopoverExampleSimple extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    createMenuList() {
        Object.keys(this.props.projectLinks).map((key, value) => {
            let icon;
            switch(key){
                case "Github":
                    icon = <test/>

            }
            return (
                <MenuItem primaryText={key}
                    leftIcon={icon}
                    href={this.props.projectLinks}
                    target="_blank" />
            )
        })
    }

    render() {
        this.createMenuList()
        return (
            <div>
                <div className="project-fab-container"
                    onTouchTap={this.handleTouchTap}>
                    <div className="project-fab fast-animated">
                        {/*TODO replace with menu/icon menu*/}
                        <i className="material-icons">more_vert</i>
                    </div>
                </div>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh"
                            leftIcon={<FontIcon className="fa fa-youtube" />}
                            href="https://github.com/callemall/material-ui"
                            target="_blank" />
                        <MenuItem primaryText="Help &amp; feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </Menu>
                </Popover>
            </div>
        );
    }
}