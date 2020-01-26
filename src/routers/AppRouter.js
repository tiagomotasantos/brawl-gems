import React, { useReducer } from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Header from '../components/Header';
import FindPlayerPage from '../components/FindPlayerPage';
import PlayerPage from '../components/PlayerPage';
import BrawlContext from '../context/brawl-context';
import brawlReducer from '../reducers/brawl';

export const history = createBrowserHistory();


const ContextRoute = ({ component, componentProps, value, ...rest }) => {
    const Component = component;

    return (
        <Route {...rest}>
            <BrawlContext.Provider value={value}>
                <Component {...componentProps} />
            </BrawlContext.Provider>
        </Route>
    );
};

const AppRouter = () => {
    const [state, dispatch] = useReducer(brawlReducer, {})
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <ContextRoute 
                    component={FindPlayerPage}
                    path="/players" 
                    exact={true} 
                    value={{ state, dispatch }}
                    componentProps={{ history }} 
                />
                <ContextRoute 
                    component={PlayerPage}
                    path="/players/:tag" 
                    value={{ state, dispatch }} 
                />
                <Redirect to="/players" />
            </Switch>
        </Router>
    );
};

export default AppRouter;