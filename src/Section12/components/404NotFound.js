import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'



const NotFoundPage = () => (
    <div>
        { /* 404!! - <a href="/">Go home</a> **/}
    404- <Link to="/">Go Home </Link>
    </div>
);

export default NotFoundPage;