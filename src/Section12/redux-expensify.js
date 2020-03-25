
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters'

import getVisibleExpenses from './selectors/expenses';
//action generators 


//Expenses Reducer



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log('Visible', visibleExpenses, state);
});

// store.dispatch(setStartDate(500));
// store.dispatch(setEndDate(600));
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//when  you dispatch an action, it is sent to ALL reducers, you should handle type in correct reducer
const expenseOne = store.dispatch(addExpense({ description: 'Rent', note: 'sacxcxv', amount: 100, createdAt: -3241 }));
const expenseTwo = store.dispatch(addExpense({ description: 'wer', note: 'yyj', amount: 200, createdAt: -563 }));
//console.log(expenseOne);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter(''));



const demoState = {
    expenses: [
        {
            id: 'sdadasdasdasdasd',
            description: 'sdadasd',
            note: 'sadasdregt',
            amount: 54500,
            createdAt: 0
        }
    ],

    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


//object spreading 
/*
const user = {
    name:'jen',
    age:34
};

console.log({
    ...user,
    location: 'Ohili',
    age: 35 //this will override age in user
});
*/