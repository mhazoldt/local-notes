import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './redux/reducers'

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let loggerMiddleware = createLogger()


let initialState = {
    notes: []

}

const store = createStore(reducers,
    initialState,
    applyMiddleware(
        loggerMiddleware // neat middleware that logs actions
    ))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
