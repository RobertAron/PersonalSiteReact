import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import AppBar from '../components/AppBar';
import {toggleDrawer} from '../actions/DrawerActions';

const mapStateToProps = (state)=>{
    return{
        open: state.appState.open,
        projectState: state.appState.projectState
    }
}

function maptchDispatchToProps(dispatch){
    //the prop toggle drawer(which will be put in a prop in another file) : the function toggle drawer(which we import in this file)
    return bindActionCreators({toggleDrawer:toggleDrawer},dispatch)
}

export default connect(mapStateToProps,maptchDispatchToProps)(AppBar);