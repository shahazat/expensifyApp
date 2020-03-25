// Higher Order Components - (HOC) - A component (HOC) that renders other components 
// Reuse code 
// Render hijacking 
// Prop manipulation 
// Abstract state 


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => ( //this is hoc 
        <div>
            <p>This is Private ... </p>
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => ( //this is hoc 
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> :<p>Please Authenticate</p>}
           
        </div>
    );
};

// const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(<AdminInfo info="this sssss" />, document.getElementById('appdiv'));

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this sssss" />, document.getElementById('appdiv'));
