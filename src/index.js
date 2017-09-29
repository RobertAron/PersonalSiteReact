import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(allReducers);
store.subscribe(() => {
    // console.log("DEBUG STORE", store.getState());
})

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#006064',
        primary2Color: '#006064',
        primary3Color: '#009587',
        accent1Color: '#7b4cfe',
        accent2Color: '#7b4cfe',
        accent3Color: '#7b4cfe',
    }
})


ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);



registerServiceWorker();

