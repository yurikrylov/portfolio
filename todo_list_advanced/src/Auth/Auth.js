import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged }  from "firebase/auth";
import PropTypes from 'prop-types';


const AuthContext = React.createContext();
function AuthProvider ({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();
    useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
        if (user){setCurrentUser(user)}})
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