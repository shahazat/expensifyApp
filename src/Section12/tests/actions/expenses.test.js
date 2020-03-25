import {editExpense, removeExpense, addExpense} from '../../actions/expenses';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({ // To equal is used to compare objects 
        type: 'REMOVE_EXPENSE',
        teBeDeleted: '123abc'
    });
});

test('Should setup edit expense action object', ()=>{
    const id = 42424242425;
    const update={note:'New Note DD'}
    const edit= editExpense(id, update);
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id:id,
        updates:update
    });
});

test('Shouls setup add expense action object with provided values',()=>{
    const expenseDate={
        description: 'Rent',
        amount:1300,
        note: 'This is that',
        createdAt: 1200
    };
    const actionAdd =addExpense(expenseDate);
    expect(actionAdd).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseDate,
            id: expect.any(String)
        }

    });
});

test('Shouls setup add expense action object with default values',()=>{

    const expected = { description: '', note : '', amount: 0, createdAt: 0 };
    const actionAdd =addExpense();
    expect(actionAdd).toEqual({
        type:'ADD_EXPENSE' ,
        expense:{
            ...expected,
            id: expect.any(String)
        }
    });

});