import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const ExpensDashBoaedPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />

    </div>
);

export default ExpensDashBoaedPage;
