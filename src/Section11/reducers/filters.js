
import moment from 'moment';


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
export default (state = filterReducerDefaultState, action) => {

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
