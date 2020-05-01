import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import LatestBlocks from './LatestBlocks';
import LatestTransactions from './LatestTransactions';
import Block from './Block';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/blocks" component={LatestBlocks} />
            <Route exact path="/block/:idBlock" component={Block} />
            <Route exact path="/transactions" component={LatestTransactions} />
        </Switch>
    </BrowserRouter>
)

export default Router;