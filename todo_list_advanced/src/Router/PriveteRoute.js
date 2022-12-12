import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { AuthContext } from "../Auth/Auth";
import PropTypes from 'prop-types';

const PriveteRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/login"} />)
            }
        />
    )
}

PriveteRoute.propTypes = {
    component: PropTypes.any
};
export default PriveteRoute
