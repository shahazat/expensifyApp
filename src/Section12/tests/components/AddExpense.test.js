import React from 'react';
import { AddExpensePage } from '../../components/addExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render add expense page ', () => {
    //before each handles it 
    /*const onSubmit = jest.fn();
    const history = { push: jest.fn()}; 
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);*/
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    //before each handles it 
    /*const onSubmit = jest.fn();
    const history = { push: jest.fn()}; 
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);*/
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});