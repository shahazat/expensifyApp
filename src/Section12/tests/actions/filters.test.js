import {setEndDate,setStartDate,sortByAmount,setTextFilter,sortByDate} from '../../actions/filters' 
import moment from 'moment';

test('testing set start date ', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    });
});

test('testing set end date ', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    });
});

test('sortByAmount',()=>{
    expect(sortByAmount()).toEqual({
        type:'SORT_AMOUNT'
    });
});

test('sortByDate',()=>{
    expect( sortByDate()).toEqual({
        type:'SORT_DATE'
    });
});

test('setTextFilter',()=>{
    const val = 'aa';
    const text = setTextFilter(val);
    expect(text).toEqual({
        type: 'EDIT_TEXT',
        text: val
    });
});

test('setTextFilter default',()=>{
    const val = '';
    const text = setTextFilter();
    expect(text).toEqual({
        type: 'EDIT_TEXT',
        text: val
    });
});
