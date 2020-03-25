import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const editPage = (props) => {

    console.log(props);
    
    return (
    <div>
        This is from my edit ( {props.match.params.thisVar} ) Page
    </div> 
    );
};




export default editPage;