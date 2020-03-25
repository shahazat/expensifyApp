import { createStore } from 'redux'

const addOriginal =(obj) => {

    return obj.a + obj.b;
}

const add = ({a: cc, b: dd }) => { //destructuring right in arguments 
    return cc + dd ;
}

console.log(add({a:21, b:22}));

//Action generators - functions that return action objects
const incrementCount1= (payload = {} ) =>{
    return{
        type:'INCREMENT',
        incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1//if incrementBy exists, use it, otherwise use 1 
    };
};

const incrementCount= ( {incrementBy:num = 1 } = {} ) =>{
    return{
        type:'INCREMENT',
        incrementBy : num //if incrementBy exists, use it, otherwise use 1 
    };
};


const decrementCount = ( {decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy // decrementBy: decrementBy is equal to decrementBy
});

const resetCount = () => ({
    type:'RESET'
});

const setCount = ({count = 1} ={}) => ({
    type: 'SET',
    count
});


//Reducers
// 1. Reducers are pure functions, just uses input to determine output, just bound to function scope 
// 2.Never change state or action 

const countReducer = (state = { count: 4 }, action) => { //state is previouse state, and a default value is used here
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }

}
//this is also called when dispatch is called 
const store = createStore(countReducer);

//subscribe is called every time a change is detected 
const unsubscribe = store.subscribe(() => {
    console.log('subscribe', store.getState());
});
// unsubscribe(); //to unsubscribe 

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 129}));
store.dispatch(decrementCount({decrementBy: 200}));
store.dispatch(resetCount());
store.dispatch(setCount({count:98}));

/////////////////////////////traditional action changing 
//actions are nothing more than objects sent to store 
//dispatch causes another call to createStore
// store.dispatch({
//     type: 'INCREMENT' //convention in redux to use capital in type names, not necessary
// }
// );

// store.dispatch({
//     type: 'INCREMENT', //convention in redux to use capital in type names, not necessary
//     incrementBy: 5
// }
// );
// store.dispatch({
//     type: 'DECREMENT', //convention in redux to use capital in type names, not necessary
//     decrementBy: 20
// }
// );

// store.dispatch({
//     type: 'RESET'
// });
// store.dispatch({
//     type: 'SET',
//     count: 102
// });
