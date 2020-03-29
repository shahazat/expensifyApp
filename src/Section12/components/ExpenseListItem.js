import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



// const ExpenseLisItem = (props) => {
//     return (
//         <div>
//             <h3>{props.description}</h3>
//             <p>{props.amount}, {props.createdAt}</p>
//         </div>
//     );
// };

// const ExpenseLisItem = (props) => {
//     const {description, amount, createdAt} = props.expense;
//     const id = props.id;

//     return (
//         <div>
//             <h3>{description}</h3>
//             <p>{amount}, {createdAt}</p>
//             <button onClick={()=>{     console.log(id);
//                  props.dispatch(removeExpense({ id:id  }))}}>Remove</button>

//         </div>
//     );
// };

//named export to use in test files 
//better way 
export const ExpenseLisItem = ({ dispatch, id, description, amount, createdAt }) => {

    return (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title" >{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(amount / 100.).format('$0,0.00')}</h3>

        </Link>
    );
};

// export default connect()(ExpenseLisItem); // this is valid!, we dont want to access stores elements, we just need connect to access dispatch(); 


export default ExpenseLisItem; 