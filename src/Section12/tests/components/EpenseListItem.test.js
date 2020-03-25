import React from 'react';
import {ExpenseLisItem} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('Should test add list item ', ()=>{
    //export const ExpenseLisItem = ({ dispatch, id, description, amount, createdAt }) => {

    const wrapper = shallow(<ExpenseLisItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});