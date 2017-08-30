import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import About from '../components/About';
import {setProjectState} from '../actions/AppStateActions'


const mapStateToProps = (state)=>{
    return{
    }
}

function maptchDispatchToProps(dispatch){
    //the prop toggle drawer(which will be put in a prop in another file) : the function toggle drawer(which we import in this file)
    return bindActionCreators({setProjectState:setProjectState},dispatch)
}

export default connect(mapStateToProps,maptchDispatchToProps)(About);