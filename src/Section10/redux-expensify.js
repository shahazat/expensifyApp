import { createStore, combineReducers } from 'redux'
import uuid from 'uuid';

//action generators 
const addExpense = ({ description: desc = '', note = '', amount: amnt = 0, createdAt: crtat = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: desc,
        note: note,
        amount: amnt,
        createdAt: crtat
    }
});
//these functions just return objects
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    teBeDeleted: id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (str = '') => ({
    type: 'EDIT_TEXT',
    text: str
});

const sortByAmount = () => ({
    type: 'SORT_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_DATE'
});

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});


const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});
//Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'REMOVE_EXPENSE':
            const rr = state.filter(element => {
                return element.id !== action.teBeDeleted;
            });


            /* with destructuring 
                 const rr =  state.filter(({id}) => {
             return id !== action.teBeDeleted;
              });*/
            console.log('This ', rr);

            return rr;

        case 'ADD_EXPENSE':
            //2 ways to do that: 1)concat 
            /*
            concat does not change array at all.
            const name = ['ali', 'sds'];
            undefined
            name.push('jen');
            3
            name.concat('Jafar')
                (4)["ali", "sds", "jen", "Jafar"]
            name
                (3)["ali", "sds", "jen"]
            */
            //return state.concat(action.expense);

            //2) spread operator 
            // const names = ['ali', 'mamad']
            // undefined
            // ['adam', ...names, 'Ko']
            // (4)["adam", "ali", "mamad", "Ko"]
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });


        default:

            return state;
    }
}

const someReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        default:
            return state;
    }
}

const filterReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };
const filterReducer = (state = filterReducerDefaultState, action) => {

    switch (action.type) {
        case 'EDIT_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };

        default:
            return state;
    }
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const EndDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && EndDateMatch && textMatch;
    }).sort((a, b) => {
        /**
         * function compare(a, b) {
            if (a is less than b by some ordering criterion) {
                return -1;
            }
            if (a is greater than b by the ordering criterion) {
                return 1;
            }
            // a must be equal to b
            return 0;
            }
         */
        if (sortBy === 'date') {
            return a.createdAt <= b.createdAt ? 1 : -1;
        } else {
            return a.amount <= b.amount ? 1 : -1;

        }
    });
};


// Store creation 
const store = createStore(
    //combine arguments are key-value objects, key is root state name, value is reducer
    combineReducers(
        {
            expenses: expensesReducer,
            someOtherValue: someReducer,
            filters: filterReducer

        }
    )
);

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