import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import CharSheet from './components/pages/CharSheet';
import Info from './components/pages/Info';
const history = require('history').createBrowserHistory();

export const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <Route path="/" render={(props) => <Info />} />
                <Route path="/home" render={(props) => <Home />} />
                <Route path="/info" render={(props) => <Info />} />
                <Route path="/sheet" render={(props) => <CharSheet />} />
            </div>
        </Router>
    );
}
