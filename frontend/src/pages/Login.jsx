import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Login() {

    const { login } = useAuth();

    const dafaultValue = {
        email: '',
        password: ''
    }

    const [data, setData] = useState(dafaultValue);

    const [loginError, setLoginError] = useState(null);

    const addData = (key, data) => { 
        setData(curr => ({
            ...curr,
           [key]: data 
        }))
    }



    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await login(data);
            setData(dafaultValue);
        } catch (error) {
            setLoginError(error);
            console.log(loginError)
        }


    }

    return (
        <div className="container form-style">
            <h1>Login</h1>
            <div className="form">
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={event => addData('password', event.target.value)}
                        />
                    </div>

                    {loginError !== null && <div className="error">{loginError.message}</div>}
                    {loginError?.errors && loginError.errors.map( (err, index) => (
                        <div div key = {`err${index}`}>{err}</div>
                    ))}

                    <div>
                        <button>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;