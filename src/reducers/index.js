import {combineReducers} from 'redux';
import projectsReducer from './Reducer-Projects';
import appState from './Reducer-App-State'
import { routerReducer } from 'react-router-redux'


const allReducers = combineReducers({
    projectsData: projectsReducer,
    appState: appState,
    routing: routerReducer
})

export default allReducers;