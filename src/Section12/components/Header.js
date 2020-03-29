import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Header = ({ logout }) => (
    <header className="header">
        <div className="content-container">
            {/** OLD STYLE 
        <NavLink to="/dashboard" activeClassName="is-active" > dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active"> create </NavLink> 
        <NavLink to="/help" activeClassName="is-active"> help </NavLink>
        */}
            <div className="header__content">
                <Link className="header__title" to="/dashboard" >
                    <h1>Expensify</h1>
                </Link>

                <button className="button button--link" onClick={logout} >Logout</button>
            </div>
        </div>

    </header>
);

const mapDispatch2Props = (dispatch) => ({
    logout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatch2Props)(Header);
// export default Header;

