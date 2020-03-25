import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/edit';
import expenses from '../fixtures/expenses';

let onDeleteClick, onEditClick, history, expense, wrapper;
beforeEach(()=>{
    onDeleteClick = jest.fn();
    onEditClick = jest.fn();
    history = { push: jest.fn() };

    expense = expenses[0];
    wrapper = shallow(<EditExpensePage expense={expense} onDeleteClick={onDeleteClick} onEditClick={onEditClick} history={history} />);
});


test('should render edit page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});


test('should handle edit expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onEditClick).toHaveBeenCalledWith(expense.id, expense);
});

test('should handle remove expense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onDeleteClick).toHaveBeenCalledWith({id: expense.id});
});