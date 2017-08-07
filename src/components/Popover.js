import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './ProjectCard.css';
import FontIcon from 'material-ui/FontIcon';
import {black, red900,cyan900} from 'material-ui/styles/colors';



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
        return(Object.keys(this.props.projectLinks).map((key, value) => {
            switch (key) {
                case "github":
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<FontIcon className="fa fa-github" color={black}/>}
                            href={this.props.projectLinks.github}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
                case "youtube":
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<FontIcon className="fa fa-youtube" color={red900}/>}
                            href={this.props.projectLinks.youtube}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
                case "devpost":
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<img src='../../res/DevpostIcon.svg' alt="devpost"/>}
                            href={this.props.projectLinks.devpost}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
                default:
                    return (
                        <MenuItem primaryText={key}
                            key={key}
                            leftIcon={<FontIcon className="fa fa-globe" color={black}/>}
                            href={this.props.projectLinks.key}
                            target="_blank"
                            onTouchTap={this.handleRequestClose} />
                    )
            }
        }))
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
                    <Menu disableAutoFocus={true}>
                        <MenuItem
                            primaryText="Local"
                            key="Local"
                            leftIcon={<FontIcon className="fa fa-info" color={cyan900}/>}
                            href={"/projects/"+this.props.title}
                            onTouchTap={this.handleRequestClose} />
                        {this.createMenuList()}
                    </Menu>
                </Popover>
            </div>
        );
    }
}