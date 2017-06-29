import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//TODO: map to correct place
import App from '../components/App';

const mapStateToProps = (state)=>{
    return{
        projects: state.projects
    }
}


export default connect(mapStateToProps)(App);