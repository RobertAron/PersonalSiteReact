import React, {Component} from 'react';
import EmailDialog from './EmailDialog'
import FlatButton from 'material-ui/FlatButton';



export default class NavRightButtons extends Component {
	static muiName = 'FlatButton';
    render(){
        return(
            <div className="right-nav-buttons">
                <FlatButton href='/about' {...this.props} label="About"/>
                <EmailDialog  {...this.props} />
            </div>
        )
    }
}