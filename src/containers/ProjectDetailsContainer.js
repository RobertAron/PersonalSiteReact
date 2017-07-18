import {connect} from 'react-redux';
import ProjectDetails from '../components/ProjectDetails';
import {bindActionCreators} from 'redux';
import {setProjectState} from '../actions/AppStateActions';


const mapStateToProps = (state)=>{
    return{
        projects: state.projectsData.projects
    }
}

function maptchDispatchToProps(dispatch){
    //the prop toggle drawer(which will be put in a prop in another file) : the function toggle drawer(which we import in this file)
    return bindActionCreators(
        {setProjectState:setProjectState
        },dispatch
    )
}

export default connect(mapStateToProps,maptchDispatchToProps)(ProjectDetails);