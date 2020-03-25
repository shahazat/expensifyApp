import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// statndard js 
//const date = new Date();
const now = moment();
console.log(now.format('MMM Do YYYY'));
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ?  props.expense.description :'',
            note:  props.expense ?  props.expense.note :'',
            amount:  props.expense ?  (props.expense.amount/100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false
        };
    }


    onAmountChageHandler = (e) => {
        const amount = e.target.value;
        if (!amount) {//handle delete, otherwise delete wont work 
            this.setState(() => ({ amount: amount }));
        }

        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount: amount }));

        }
    }

    onDiscriptionChageHandler = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }
    onNoteChageHandler = (e) => {
        //Two ways : 
        //1)
        //const note = e.target.value;
        //this.setState(() => ({ note: note }));

        //2)
        e.persist();
        this.setState(() => ({ note: e.target.value }));

    }

    onCalenderFocusChange = ({ focused }) => { //destructuring an object
        this.setState(() => ({ calenderFocused: focused }));

    }

    onDateChange = (moment) => {
        if (moment)
            this.setState(() => ({ createdAt: moment }));

    }

    onFormSubmit = (e) => {
        e.preventDefault(); //prevent page refresh 

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(), //epoch in miliseconds
                note: this.state.note

            });
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDiscriptionChageHandler}
                    />

                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChageHandler}

                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calenderFocused} // PropTypes.bool
                        onFocusChange={this.onCalenderFocusChange} // PropTypes.func.isRequired
                        id="ttttsad" // PropTypes.string.isRequired,
                        numberOfMonths={1}
                        isOutsideRange={(day) => { return false; }}
                    />
                    <textarea
                        onChange={this.onNoteChageHandler}
                        value={this.state.note}
                        placeholder='Notes'>
                    </textarea>
                    <button>
                        Add expense
                    </button>
                </form>
            </div>
        );
    }
}