import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InsideLayout from '../layouts/InsideLayouts';
import OutsideLayout from '../layouts/OutsideLayouts';

function CustomRoute({ component: Component, ...rest }) {
    const { isAuth } = useSelector(state => state.user);
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuth
                    ? <InsideLayout><Component {...props} /></InsideLayout>
                    : <OutsideLayout><Component {...props} /></OutsideLayout>
            )}
        />
    )
}
export default CustomRoute