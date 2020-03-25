import selectExpenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';


test('should test select expenseTotal with 0', ()=>{
    const num = selectExpenseTotal();
    expect(num).toBe(0);
});

test('should test select expenseTotal with values', ()=>{
    const num = selectExpenseTotal(expenses);
    expect(num).toBe(114195);
});


test('should test select expenseTotal with one value ', ()=>{
    const num = selectExpenseTotal([expenses[0]]);
    expect(num).toBe(expenses[0].amount);
    //console.log(sum);
});


