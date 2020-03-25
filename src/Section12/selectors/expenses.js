import moment from "moment";

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //const EndDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
       
       const createdAtMoment= moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const EndDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && EndDateMatch && textMatch;
    }).sort((a, b) => {
        /**
         * function compare(a, b) {
            if (a is less than b by some ordering criterion) {
                return -1;
            }
            if (a is greater than b by the ordering criterion) {
                return 1;
            }
            // a must be equal to b
            return 0;
            }
         */
        if (sortBy === 'date') {
            return a.createdAt <= b.createdAt ? 1 : -1;
        } else {
            return a.amount <= b.amount ? 1 : -1;

        }
    });
};

export default getVisibleExpenses;