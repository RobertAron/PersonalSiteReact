import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';

const store = createStore();

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
