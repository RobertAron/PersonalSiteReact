import {connect} from 'react-redux';
import ProjectList from '../components/ProjectList';
import {bindActionCreators} from 'redux';
import {setProjectState} from '../actions/AppStateActions';

const mapStateToProps = (state)=>{
    return{
        projects: state.projectsData.projects,
        tags: state.projectsData.tags
    }
}

function maptchDispatchToProps(dispatch){
    //the prop toggle drawer(which will be put in a prop in another file) : the function toggle drawer(which we import in this file)
    return bindActionCreators(
        {setProjectState:setProjectState
        },dispatch
    )
}


export default connect(mapStateToProps,maptchDispatchToProps)(ProjectList);