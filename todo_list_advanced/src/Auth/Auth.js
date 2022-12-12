import React, { useEffect, useState } from "react";
import { app } from '../firebase';
import PropTypes from 'prop-types';


const AuthContext = React.createContext();
function AuthProvider ({ children }) {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    }, []);

    return (
        <AuthContext.Provider
            value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )

}
AuthProvider.propTypes = {
    children: PropTypes.element
};

export {AuthProvider, AuthContext}