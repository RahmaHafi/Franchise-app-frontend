import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import  InsideLayouts from '../layouts/InsideLayouts'

function PrivateRoute({ component: Component, ...rest }) {
    const { isAuth } = useSelector(state => state.user)

    return (
        <Route
            {...rest}
            component ={(props)=>(
                isAuth 
                ? <InsideLayouts><Component {...props}/></InsideLayouts>
                : <Redirect to="/login"/>
               
            )}
        />
    )
}

export default PrivateRoute