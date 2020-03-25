import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummeryPage from './ExpensesSummery';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const ExpensDashBoaedPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseSummeryPage />
        <ExpenseList />
    </div>
);

export default ExpensDashBoaedPage;
