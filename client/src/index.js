import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeRoutes} from './routes';

const routes = makeRoutes();

ReactDOM.render(routes, document.getElementById('root'));

