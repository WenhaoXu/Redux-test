import React from 'react'
import ReactDOM from 'react-dom'
import { createStore , applyMiddleware} from 'redux'
import App from './App'
import counter from './reducers/headerReducer'
import thunk from 'redux-thunk';
import {Provider} from "react-redux"
import './todo.css';

const store = createStore(counter,applyMiddleware(thunk))
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl
)

