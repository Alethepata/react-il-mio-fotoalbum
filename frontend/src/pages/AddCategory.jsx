import { useState } from "react";
import axios from "../utils/axiosClient";
import { useNavigate } from "react-router-dom";
import { usePhotos } from "../contexts/PhotosContext";



function AddCategory() {

    const { onChange } = usePhotos();

    const [data, setData] = useState('');

    const [categoryError, setCategoryError] = useState(null);

    const navigate = useNavigate();


    const addData = (value) => {
        setData(value);
    }

    const addCategory = async (url, value) => {
        console.log({name:value})
        try {
            await axios.post(url, { name: value });
            onChange();
            navigate('../')
        } catch (err) {
            const errors = err.response.data.errors;
            
            const error = new Error(errors ? '' : err.response.data);
            
            error.errors = errors;
            
            throw error;

        }
    }
  
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {
            await addCategory('categories', data);
            setData('');

        } catch (error) {
            setCategoryError(error);
        }
    }



    return (
        <div className="container">
            <h1>Nuova categoria</h1>
            <form onSubmit={ handleSubmit }>

                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        value={data}
                        onChange={event => addData(event.target.value)}
                    />
                </div>
                
                {categoryError !== null && <div className="error">{categoryError.message}</div>}
                {categoryError?.errors && categoryError.errors.map( (err, index) => (
                    <div div key = {`err_category_${index}`}>{err}</div>
                ))}
                
                <div>
                    <button>Aggiungi</button>
                </div>
                
            </form>

        </div>
    )
}

export default AddCategory;