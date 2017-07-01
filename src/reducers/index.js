import {combineReducers} from 'redux';
import projectsReducer from './Reducer-Projects';
import filterReducer from './Reducer-Drawer'


const allReducers = combineReducers({
    projectsData: projectsReducer,
    drawer: filterReducer
})

export default allReducers;