import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import UnityGame from '../components/UnityGame';
import {setProjectState} from '../actions/AppStateActions'


const mapStateToProps = (state)=>{
    return{
        games: state.projectsData.games
    }
}

function maptchDispatchToProps(dispatch){
    //the prop toggle drawer(which will be put in a prop in another file) : the function toggle drawer(which we import in this file)
    return bindActionCreators({setProjectState:setProjectState},dispatch)
}

export default connect(mapStateToProps,maptchDispatchToProps)(UnityGame);