import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
                <Route exact path="/" component={App}/>
            </div>
        </Provider>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
