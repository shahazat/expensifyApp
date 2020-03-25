import React from 'react';
import { ExpenseSummeryPage } from '../../components/ExpensesSummery';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render EnpenseList correctly', () => {
    const wrapper = shallow(<ExpenseSummeryPage expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense list with one item', () => {
    const wrapper = shallow(<ExpenseSummeryPage expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});
