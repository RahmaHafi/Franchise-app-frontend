import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const { isAuth } = useSelector(state => state.users)

    return (
        <Route
            {...rest}
            component ={(props)=>(
                isAuth 
                ? <Component {...props}/>
                : <Redirect to="/login"/>
               
            )}
        />
    )
}

export default PrivateRoute