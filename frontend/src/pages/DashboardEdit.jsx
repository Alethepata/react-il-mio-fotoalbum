import axios from "../utils/axiosClient";
import { usePhotos } from "../contexts/PhotosContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function DashboardEdit() {

    const { categories } = usePhotos();

    const [formError, setFormError] = useState();

    const { id } = useParams();

    
    const [dataToEdit, setDataToEdit] = useState({});
    
    const fetchDataToEdit = async () => {
        const photo = await axios.get(`/photos/${id}`);
        setDataToEdit({
           title: photo.data.title,
           image: photo.data.image,
           description: photo.data.description,
           isVisible: photo.data.isVisible,
           categories: photo.data.categories.map(c => c.id),
        })
    }

    useEffect(() => {
        fetchDataToEdit();
    },[id]);
    

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
        console.log(photoData.title)
    }

    const addData = (key, newData) => {
        setDataToEdit(data => ({...data, [key]: newData}))
    }

    const addCategories = (category) => {
        const currentCategories= dataToEdit.categories;
        const newCategories = currentCategories.includes(category) ? currentCategories.filter(element => element !== category) : [...currentCategories, category];
        addData('categories', newCategories)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(dataToEdit)

        try {
            await addPhoto(`/photos/${id}`, dataToEdit);

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
                        value={dataToEdit.title}
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
                        value={dataToEdit.description}
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
                                    checked={dataToEdit.categories.includes(category.id)}
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
                        checked={dataToEdit.isVisible}
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

export default DashboardEdit;