import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    };

    onDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
        //this.props.dispatch(setTextFilter(e.target.value)); //Wow, you can access dispatch in props!
    }

    onSelectChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            this.props.sortByAmount();
        }
    }

    onFocusChange = (focusedInput) => this.setState({ focusedInput })

    render() {
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={this.onTextChange} />
                <select value={this.props.filter.sortBy} onChange={this.onSelectChange} >
                    <option value="date">Date</option>
                    <option value="amount">Amount </option>
                </select>

                <DateRangePicker
                    startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => (false)}
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


const mapDispatch2Props = (dispatch)=> ({
    setTextFilter: (txt)=>{dispatch(setTextFilter(txt)) },
    sortByDate: ()=>{dispatch(sortByDate()) } ,
    sortByAmount: ()=>{ dispatch(sortByAmount()) },
    setStartDate: (date)=>{dispatch(setStartDate(date)) } , 
    setEndDate: (date)=>{dispatch(setEndDate(date))}

});

// export default ExpenseListFilters;
export default connect(stateToProps, mapDispatch2Props)(ExpenseListFilters);
