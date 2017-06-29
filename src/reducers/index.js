import {combineReducers} from 'redux';
import projectsReducer from './Reducer-Projects';


const allReducers = combineReducers({
    projects: projectsReducer
})

export default allReducers;