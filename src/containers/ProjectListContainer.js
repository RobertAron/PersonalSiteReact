import {connect} from 'react-redux';
//TODO: map to correct place
import ProjectList from '../components/ProjectList';

const mapStateToProps = (state)=>{
    return{
        projects: state.projects
    }
}


export default connect(mapStateToProps)(ProjectList);