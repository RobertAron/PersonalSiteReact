import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Drawer from '../components/Drawer';
import {toggleDrawer} from '../actions/DrawerActions';

const mapStateToProps = (state)=>{
    console.log("state in drawer container");
    return{
        open: state.drawer.open,
        tags: state.projectsData.tags
    }
}


function maptchDispatchToProps(dispatch){
    //the prop toggle drawer(which will be put in a prop in another file) : the function toggle drawer(which we import in this file)
    return bindActionCreators({toggleDrawer:toggleDrawer},dispatch)
}

export default connect(mapStateToProps,maptchDispatchToProps)(Drawer);