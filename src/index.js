import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(allReducers);
store.subscribe(()=>{
    console.log("DEBUG STORE",store.getState());
})

ReactDOM.render(
    <MuiThemeProvider>
        <Router>
            <Provider store={store}>
                <div>
                    <Route exact path="/" component={App}/>
                </div>
            </Provider>
        </Router>
    </MuiThemeProvider>, 
    document.getElementById('root')
);
registerServiceWorker();

