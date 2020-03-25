import uuid from 'uuid';


export const addExpense = ({ description: desc = '', note = '', amount: amnt = 0, createdAt: crtat = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: desc,
        note: note,
        amount: amnt,
        createdAt: crtat
    }
});
//these functions just return objects
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    teBeDeleted: id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

 