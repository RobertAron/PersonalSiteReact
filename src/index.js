import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
