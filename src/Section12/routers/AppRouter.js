import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import Header from '../components/Header.js'
import NotFoundPage from '../components/404NotFound'
import helpPage from '../components/Help'
import editPage from '../components/edit'
import AddExpensePage from '../components/addExpense'
import ExpensDashBoaedPage from '../components/ExpensDash'


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch> {/** stops at first match */}
            <Route path="/" component={ExpensDashBoaedPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:thisVar" component={editPage} /> {/** :id is used to catch dynamic id */}
            <Route path="/help" component={helpPage} />
            <Route component={NotFoundPage} />
        </Switch>

    </div>

</BrowserRouter>
);

export default AppRouter;