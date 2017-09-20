import React, {Component} from 'react';
import EmailDialog from './EmailDialog'
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'



export default class NavRightButtons extends Component {
	static muiName = 'FlatButton';
    render(){
        return(
            <div className="right-nav-buttons">
                <Link to='/about'>
                    <FlatButton {...this.props} label="About"/>
                </Link>
                <EmailDialog  {...this.props} />
            </div>
        )
    }
}