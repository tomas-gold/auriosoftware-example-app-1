import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {Provider} from 'react-redux';
import {store} from "./store/store";
import {initProductionDependencies} from "./resources";

initProductionDependencies();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

