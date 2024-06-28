import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStorage from "../hooks/useStorage";
import axios from "../utils/axiosClient";

const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useStorage(null, 'user');

    const isLoggedIn = user !== null;

    
    const navigate = useNavigate();

    const login = async (payload) => {
        try{
            const data = await axios.post('/auth/login', payload);

            setUser(data.data);

            localStorage.setItem('accessToken', data.token);


            navigate('/dashboard');

        } catch (err) {
            const errors = err.response.data.errors;
            
            const error = new Error(errors ? '' : err.response.data);
            
            error.errors = errors;
            
            throw error;
 

        }
    }

    const logout = () => { 
        setUser(null);

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