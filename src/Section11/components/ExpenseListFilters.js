import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null

    };
    onDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value)); //Wow, you can access dispatch in props!

                }} />
                <select value={this.props.filter.sortBy} onChange={(e) => {
                    if (e.target.value === "date") {
                        //console.log(e.target.value , e.target.value === "date");

                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === "amount") {
                        console.log(e.target.value, e.target.value === "date");
                        this.props.dispatch(sortByAmount());

                    }
                }} >

                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={()=>(false)}
                    showClearDates={true}
                />
            </div>
        );

    }
}

const stateToProps = (state) => {
    return {
        filter: state.filters
    };
};


// export default ExpenseListFilters;
export default connect(stateToProps)(ExpenseListFilters);
