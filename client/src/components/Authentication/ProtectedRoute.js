import {Route, Redirect} from 'react-router-dom';
import React from 'react';

import UserService from './../../common/services/UserService';

const ProtectedRoute = ({component: Component, ...rest}) => {
    console.log({...rest})
    return (
        <Route {...rest} render={(props) => (
            UserService.isUserLogin() ?
                <Component {...props} /> : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )}/>
    )
};

export default ProtectedRoute;
