import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppStore from './store/AppStore';
import {Provider} from 'mobx-react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const history = createBrowserHistory();
const appStore = new AppStore();

ReactDOM.render(
    <Provider appStore={appStore}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
