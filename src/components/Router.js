import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import LatestBlocks from './LatestBlocks';
import LatestTransactions from './LatestTransactions';

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/blocks" component={LatestBlocks} />
            <Route exact path="/transactions" component={LatestTransactions} />
        </Switch>
    </BrowserRouter>
)

export default Router;