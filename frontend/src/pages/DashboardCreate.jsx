import axios from "../utils/axiosClient";
import { usePhotos } from "../contexts/PhotosContext";
import { useState } from "react";


function DashboardCreate() {

    const { categories } = usePhotos();

    const [formError, setFormError] = useState();


    const dataDefault = {
        title: '',
        image:'',
        description: '',
        isVisible: false,
        categories:[],
    } 

    const [photoData, setPhotoData] = useState(dataDefault);

    const addPhoto = async (url, data) => {
        try {
            await axios.post(url, data, {
                headers: { "Content-Type": "multipart/form-data" }
            });
        } catch (err) {
            const errors = err.response.data.errors;
            
            const error = new Error(errors ? '' : err.response.data);
            
            error.errors = errors;
            
            throw error;

        }
    }

    const addData = (key, newData) => {
        setPhotoData(data => ({...data, [key]: newData}))
    }

    const addCategories = (category) => {
        const currentCategories= photoData.categories;
        const newCategories = currentCategories.includes(category) ? currentCategories.filter(element => element !== category) : [...currentCategories, category];
        addData('categories', newCategories)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPhoto('/photos', photoData);
            setPhotoData(dataDefault);

        } catch (error) {
            setFormError(error);
        }
        
    }


    return (
        <div className="container pt-3">
            <h1>Nuova Foto</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="title">Titolo</label>
                    <input
                        id="title"
                        type="text"
                        value={photoData.title}
                        onChange={event => addData('title', event.target.value)}
                    />
                </div>

                <div className="margin">
                    <label htmlFor="image">Immagine</label>
                    <input
                        id="image"
                        type="file"
                        onChange={event => addData('image', event.target.files[0])}
                    />
                </div>

                <div>
                    <label htmlFor="description">Descrizione</label>
                    <textarea
                        id="description"
                        value={photoData.description}
                        onChange={event => addData('description', event.target.value)}
                    ></textarea>
                </div>

                <div className="check">
                    {
                        categories.map(category => (
                            <div key={`form_category_${category.id}`}>
                                <input
                                    id="categories"
                                    type="checkbox"
                                    checked={photoData.categories.includes(category.id)}
                                    onChange={() => addCategories(category.id)}
                                />
                                <label htmlFor="categories">
                                  {category.name}
                                </label>
                            </div>
                        ))
                    }
                </div>

                <div className="margin">
                    <input
                        id="isVisible"isVisible
                        type="checkbox"
                        checked={photoData.isVisible}
                        onChange={(event) => addData('isVisible', event.target.checked)}
                    />
                    <label htmlFor="isVisible">
                      Pubblica
                    </label>
                </div>

                <button>Invia</button>
            </form>

            {/* {formError !== null && <div className="error">{formError.message}</div>} */}
                    {formError?.errors && formError.errors.map( (err, index) => (
                        <div div key = {`err${index}`}>{err}</div>
                    ))}

        </div>
    )
}

export default DashboardCreate;