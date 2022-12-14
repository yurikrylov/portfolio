import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { AuthContext } from "../Auth/Auth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
   // console.log(currentUser)
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/login"} />)
            }
        />
    )
}

PrivateRoute.propTypes = {
    component: PropTypes.any
};
export default PrivateRoute
