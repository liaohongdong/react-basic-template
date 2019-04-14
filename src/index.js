// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from 'react'
import ReactDOM, {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import Translate from './router/translate'
// import store from "./redux/store/configureStore"

import todoApp from './redux/reducers'
import App from './App';

import 'antd/dist/antd.css'
import './style/style.css'

import * as serviceWorker from './serviceWorker';

let store = createStore(todoApp)

ReactDOM.render((
    <Provider store={store}>
        {/*<Translate/>*/}
        <App />
    </Provider>
), document.getElementById("root"));

serviceWorker.unregister();
