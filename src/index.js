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
    notes: [
        {
            title: "Info",
            text: "This is an offline notes web app.\n\n• You can save it to your home screen and use it offline.\n• Each save of the web app will have it's own set of notes.\n• Notes are saved in browser cache and will disappear if you clear out your browser data."
        }
    ]

}

const store = createStore(reducers,
    initialState,
    applyMiddleware(
        loggerMiddleware // neat middleware that logs actions
    ))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
