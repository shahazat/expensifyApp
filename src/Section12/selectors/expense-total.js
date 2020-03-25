


const selectExpenseTotal = ( expenses = [] ) =>{
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const array = expenses.map((a)=>{return a.amount});
    
    return array.length>0 ? array.reduce(reducer):0 ;
}


export default selectExpenseTotal; 