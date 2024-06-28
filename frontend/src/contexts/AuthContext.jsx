import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStorage from "../hooks/useStorage";
import axios from "../utils/axiosClient";

const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useStorage(null, 'user');

    const [isLoggedIn, setIsLoggedIn] = useStorage(false, 'logged');

    
    const navigate = useNavigate();

    const login = async (payload) => {
        try{
            const data = await axios.post('/auth/login', payload);

            setUser(data.data);

            localStorage.setItem('accessToken', data.token);

            setIsLoggedIn(true);

            navigate('/dashboard');

        } catch (err) {
            const errors = err.response.data.errors;
            
            const error = new Error(errors ? '' : err.response.data);
            
            error.errors = errors;
            
            throw error;
 

        }
    }

    const logout = () => { 
        setIsLoggedIn(false);

        localStorage.removeItem('accessToken');

        navigate('/login')
    }


    const value = {
        isLoggedIn,
        login,
        logout
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