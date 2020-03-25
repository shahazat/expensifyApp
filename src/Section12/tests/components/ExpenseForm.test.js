import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';


test('Should render expense form correctly ', () => {

    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

});


test('Should render expense form correctly with values  ', () => {

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();

});


test('Should render error for invalid form submission ', () => {

    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set descruption on input change ', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change ', () => {
    const value = 'New Note is this one @@ ';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value: value,
        },
        persist: () => { }

    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: value,
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if not valid', () => {
    const value = '23.550';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: value,
        }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission ', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt

    });

});


test('should set new date on date change ', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set onFocusChange on date change ', ()=>{
    const focused = false;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toEqual(focused);
});