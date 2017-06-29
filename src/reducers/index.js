import {combineReducers} from 'redux';
import projectsReducer from './reducer-projects';


const allReducers = combineReducers({
    projects: projectsReducer
})

export default allReducers;