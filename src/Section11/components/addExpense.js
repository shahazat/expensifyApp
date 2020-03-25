import React from 'react';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
    <div>
        This is from my AddExpensePage
        <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(addExpense(expense));
            props.history.push('/'); //navigate to /
        }}
    />
    </div>
);


export default connect()(AddExpensePage);
// export default AddExpensePage;