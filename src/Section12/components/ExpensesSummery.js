import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom'

export const ExpenseSummeryPage = (props) => {

    const count = props.expenses.length;
    const total = selectExpenseTotal(props.expenses);

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{count}</span> expense{count > 1 ? 's' : ''} totalling <span>{numeral(total / 100.).format('$0,0.00')}</span> </h1>
                <div className="page_header__actions">
                    <Link className="button" to="/create" >Add Expense</Link> 
                </div>

            </div>
        </div>
    );
}

const mapState2Props = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapState2Props)(ExpenseSummeryPage);