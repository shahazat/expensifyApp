import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const editPage = (props) => {

    //console.log(props);

    return (
        <div> 
        cccc
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {

                console.log('Updated',expense );
                props.dispatch(editExpense(props.expense.id,expense));

                props.history.push('/'); //navigate to /
            }}
            
            />

            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/'); //navigate to /
            }}>Remove</button>
        </div>
    );
};


const mapStore2State = (state, props) => ({ //we can access props here!
    expense: state.expenses.find((expense) => (expense.id === props.match.params.thisVar))
});

// export default editPage;
export default connect(mapStore2State)(editPage);