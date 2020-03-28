import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

export class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/'); //navigate to /
    }

    render() {
        return (
            <div>
                <h1>This is from my AddExpensePage</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );

    }
}

const mapDispatch2Props = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
}

export default connect(undefined, mapDispatch2Props)(AddExpensePage);//mapState2Props is not needed, second one is map dispatch2props
// export default AddExpensePage;