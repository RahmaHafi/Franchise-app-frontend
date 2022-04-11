import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import OutsideLayouts from '../layouts/OutsideLayouts';


function PublicRoute({ component: Component, ...rest }) {

    const { isAuth } = useSelector(state => state.users)

    return (
        <Route
            {...rest}
            component={(props) => (
                isAuth
                    ? <Redirect to="/dashboard" />
                    :<OutsideLayouts> <Component {...props} /> </OutsideLayouts>
            )}
        />
    )
}

export default PublicRoute