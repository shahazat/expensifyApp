import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'
import uuid from 'uuid';

// <ExpenseListItem description={props.Thisexpenses[0].description} amount={props.Thisexpenses[0].amount} createdAt={props.Thisexpenses[0].amount}/>
//   <ExpenseListItem description={'fff'} amount={120} createdAt={12}/>
//         <ExpenseListItem description={props.Thisexpenses[0].description} amount={props.Thisexpenses[0].amount} createdAt={props.Thisexpenses[0].createdAt}/>
// {props.thisFilter.text}
// {props.Thisexpenses.length}

//named export to use in test 
export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile" >Expenses</div>
            <div className="show-for-desktop" >Expense</div>
            <div className="show-for-desktop" >Amount</div>
        </div>
        <div className="list-body">
        {
            props.Thisexpenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : (
                    props.Thisexpenses.map((a) => {/*return <ExpenseListItem key={a.id} expense={a} id={a.id} />*/
                        return <ExpenseListItem key={a.id} {...a} />
                    }
                    )
                )
        }
        </div>
    </div>
);

//connect returns a function, which you should call with component argument
//connect is not that Higher Order Component

const mapStateToProps = (state) => {
    return {
        Thisexpenses: selectExpenses(state.expenses, state.filters),
        thisFilter: state.filters
    };
};

/*
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectedExpenseList;
*/

//equal to lines above 
export default connect(mapStateToProps)(ExpenseList); //this is connected version uesd in actual program
