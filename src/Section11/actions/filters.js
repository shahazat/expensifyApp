
export const setTextFilter = (str = '') => ({
    type: 'EDIT_TEXT',
    text: str
});

export const sortByAmount = () => ({
    type: 'SORT_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_DATE'
});

export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});