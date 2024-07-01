import { createContext, useContext } from "react";
import axios from "../utils/axiosClient";

const MessagesContext = createContext()


const MessagesProvider = ({ children }) => {

    const addMessage = async (data) => { 
        try {
            await axios.post('messages', data);
            
        } catch (err) {
            const errors = err.response.data.errors;
            
            const error = err.response.data;
            
            error.errors = errors;
            
            throw error;

        }
    }


    const value = {
        addMessage
    }

    return (
        <MessagesContext.Provider value={value}>
            {children}
        </MessagesContext.Provider>
    )
}

const useMessages = () => {
    const value = useContext(MessagesContext);
    return value;
}

export {MessagesProvider, useMessages};