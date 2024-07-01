import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";
import { Link } from "react-router-dom";

function Messages() {
    const [messages, setMessages] = useState([]);

    const getApi = async () => {
        const messagesData = await axios.get('/messages');

        setMessages(messagesData.data.messages);

    }

    useEffect(() => {
        getApi();
    }, [])

    const format = (value) => {

        const time = value.substr(11, 5);

        const year = value.substr(0, 4);

        const mounth = value.substr(5, 2);

        const day = value.substr(8, 2);

        const data = `${day}/${mounth}/${year}`

        return `${data} ${time}`
        
    }

    return (
        <div className="container">
            <h1>Messaggi</h1>
            <div className="table">
                <table>
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Messaggio</th>
                        <th>Orario</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            messages.map(message => (
                                <tr>
                                    <td>{ message.email }</td>
                                    <td>{ message.message.length <= 10 ? message.message : `${message.message.substr(0, 10)}...`  }</td>
                                    <td>{ format(message.createdAt) }</td>
                                    <td>{ <Link to={`/dashboard/messages/${message.id}`}>Apri</Link> }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Messages;