import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { login } from './services/axios';
import 'normalize.css';
import './styles/styles.scss';

login();

ReactDOM.render(<AppRouter/>, document.getElementById('root'));