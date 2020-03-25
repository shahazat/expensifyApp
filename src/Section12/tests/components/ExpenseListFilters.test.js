import React from 'react';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { shallow } from 'enzyme';
import { altfilters, filters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filter={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );

});

test('should render expense list filters correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with altdata correctly ', ()=>{
    //changing props 
    wrapper.setProps({
        filter: altfilters
    });
    expect(wrapper).toMatchSnapshot();

});

test('should handle text change ', ()=>{
    const val = 'THis is changed value';

    wrapper.find('input').simulate('change',{
        target:{value:val}
    })

    expect(setTextFilter).toHaveBeenCalledWith(val);
});


test('should handle select change date ', ()=>{
    const val = 'date';

    wrapper.find('select').simulate('change',{
        target:{value:val}
    })

    expect(sortByDate).toHaveBeenCalled();
});


test('should handle select change amount ', ()=>{
    const val = 'amount';

    wrapper.find('select').simulate('change',{
        target:{value:val}
    })

    expect(sortByAmount).toHaveBeenCalled();
});

test('should test start date and end date change' , ()=>{

    const startDate = moment(0).add(5,'years'), endDate= moment(0).add(10,'years'); 

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

test('should test focus change ', ()=>{
    const startDate = "startDate";

    wrapper.find('DateRangePicker').prop('onFocusChange')(startDate);

    expect(wrapper.state('focusedInput')).toBe(startDate);

});