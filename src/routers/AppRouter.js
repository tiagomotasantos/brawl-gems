import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header';
import FindPlayerPage from '../components/FindPlayerPage';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/players" component={FindPlayerPage}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;