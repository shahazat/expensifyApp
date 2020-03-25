import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';

export const ExpenseSummeryPage = (props) => {

    const count = props.expenses.length;
    const total = selectExpenseTotal(props.expenses); 
    
    return (
        <div>
            <h1>{`Viewing ${count} expense${count > 1 ? 's' : ''} totalling ${numeral(total / 100.).format('$0,0.00')} `}</h1>
        </div>
    );
}

const mapState2Props = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapState2Props)(ExpenseSummeryPage);