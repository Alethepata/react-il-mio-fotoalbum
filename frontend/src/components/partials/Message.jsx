import { useState } from "react";
import { useMessages } from "../../contexts/MessagesContext";

function Message() {

    const { addMessage } = useMessages();

    const dafaultValue = {
        email: '',
        message: ''
    }

    const [data, setData] = useState(dafaultValue);

    const [messageError, setMessageError] = useState(null);

    const addData = (key, data) => { 
        setData(curr => ({
            ...curr,
           [key]: data 
        }))
    }



    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await addMessage(data);
            setData(dafaultValue);
        } catch (error) {
            setMessageError(error);
            console.log(loginError)
        }


    }

    return (
        <div className="container my-5 form-style">
            <h1 className="text-center">Message</h1>
            <div className="form d-flex justify-content-center">
                <form onSubmit={ handleSubmit }>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={event => addData('email', event.target.value)}
                        />
                    </div>

                    <div className="margin">
                        <label htmlFor="message">Messaggio</label>
                        <textarea
                            type="text"
                            name="message"
                            id="message"
                            value={data.message}
                            onChange={event => addData('message', event.target.value)}
                        >  
                        </textarea>
                    </div>

                    {messageError?.errors && messageError.errors.map( (err, index) => (
                        <div div key = {`err${index}`}>{err}</div>
                    ))}

                    <div>
                        <button>Invia</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Message;