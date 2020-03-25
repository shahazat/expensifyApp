import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {

    const filterReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }

    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filterReducerDefaultState);
});

test('Should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
});

test('Should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SORT_DATE' });
    expect(state.sortBy).toEqual('date');
});

test('should set text filter' , ()=>{
    const obj= {
        type:'EDIT_TEXT',
        text:'this is Txt vlue'
    }
    const result = filtersReducer(undefined,obj);
    expect(result.text).toBe(obj.text);
});

test('should set start date filter' , ()=>{
    const obj= {
        type:'SET_START_DATE',
        date: 1200
    }
    const result = filtersReducer(undefined,obj);
    expect(result.startDate).toBe(obj.date);
});

test('should set end date filter' , ()=>{
    const obj= {
        type:'SET_END_DATE',
        date: 960000
    }
    const result = filtersReducer(undefined,obj);
    expect(result.endDate).toBe(obj.date);
});
