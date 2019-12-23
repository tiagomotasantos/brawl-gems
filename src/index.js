import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { login } from './services/axios';

login();

ReactDOM.render(<AppRouter/>, document.getElementById('root'));