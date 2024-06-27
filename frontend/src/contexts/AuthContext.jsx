import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const value = {
        isLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const value = useContext(AuthContext);
    return value;
}

export {AuthProvider, useAuth};