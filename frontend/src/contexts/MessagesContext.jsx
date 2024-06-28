import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosClient";

const MessagesContext = createContext()


const MessagesProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);

    const getApi = async () => {
        const messagesData = await axios.get('/messages');

        setMessages(messagesData.data);

    }

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

    useEffect(() => {
        getApi();
    }, [])

    const value = {
        messages,
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