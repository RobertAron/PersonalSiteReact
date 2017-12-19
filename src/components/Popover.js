import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './ProjectCard.css';
import FontIcon from 'material-ui/FontIcon';
import { black, red900 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'



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
        return (Object.keys(this.props.projectLinks).map((key, value) => {
            switch (key) {
                case "github":
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<FontIcon className="fa fa-github" color={black} />}
                            href={this.props.projectLinks.github}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
                case "youtube":
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<FontIcon className="fa fa-youtube" color={red900} />}
                            href={"https://youtu.be/" + this.props.projectLinks.youtube}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
                case "devpost":
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<img src='../../res/DevpostIcon.svg' alt="devpost" />}
                            href={this.props.projectLinks.devpost}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
                default:
                //TODO: this one is bugged
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<FontIcon className="fa fa-globe" color={black} />}
                            href={this.props.projectLinks.key}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
            }
        }))
    }

    render() {
        return (
            <div ref='listArea'>
                <div className="project-fab-container"
                    onClick={this.handleTouchTap}>
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
                        <Link to={"/projects/" + this.props.title}>
                            <MenuItem
                                primaryText="learn more"
                                key="learn more"
                                leftIcon={<img src="../../res/icons/mipmap-xxhdpi/ic_launcher.png" alt="local" />}
                                onTouchTap={this.handleRequestClose} />
                        </Link>
                        {this.createMenuList()}
                    </Menu>
                </Popover>
            </div>
        );
    }
}