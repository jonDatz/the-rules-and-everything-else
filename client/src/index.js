import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeRoutes} from './routes';
require('dotenv').config();

const routes = makeRoutes();

ReactDOM.render(routes, document.getElementById('root'));

