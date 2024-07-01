import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";
import { Link, useParams } from "react-router-dom";

function MessagesDetails() {
    const {id} = useParams();

    const [message, setMessage] = useState({});

  
    
    const getMessage =  async () => {
      const data = await axios.get(`/messages/${id}`);
      setMessage(data.data)
      
    }
    
    useEffect(() => {
      getMessage()
    }, [id])

    return (
        <div className="container">
            <Link to="../">Indietro</Link>

            <h1>Messaggio</h1>

            <div>
                <p>{ message.email }</p>
                <p>{ message.message }</p>
            </div>

        </div>
    )
}

export default MessagesDetails;