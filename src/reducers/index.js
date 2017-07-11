import {combineReducers} from 'redux';
import projectsReducer from './Reducer-Projects';
import filterReducer from './Reducer-Drawer'
import { routerReducer } from 'react-router-redux'


const allReducers = combineReducers({
    projectsData: projectsReducer,
    drawer: filterReducer,
    routing: routerReducer
})

export default allReducers;