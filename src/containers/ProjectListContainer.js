import {connect} from 'react-redux';
//TODO: map to correct place
import ProjectList from '../components/ProjectList';

const mapStateToProps = (state)=>{
    return{
        projects: state.projectsData.projects,
        tags: state.projectsData.tags
    }
}


export default connect(mapStateToProps)(ProjectList);