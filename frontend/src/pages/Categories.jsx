import { Link } from "react-router-dom";
import { usePhotos } from "../contexts/PhotosContext";
import axios from "../utils/axiosClient";
import { useEffect, useState } from "react";


function Categories() {

    const { categories, onChange } = usePhotos();

    // const [categories, setCategories] = useState([]);



    // const getApi = async () => {
    //     const categoriesData = await axios.get('/categories');
    //     setCategories(categoriesData.data.categories);
    // }


    // useEffect(() => {
    //     getApi();
    // }, [])

    const deleteCategory = async (id) => {
        await axios.delete(`categories/${id}`);
        onChange();
        
    };

    return (
        <div className="container">
            <h1>Categorie</h1>

            <Link to="/dashboard/categories/create">Aggiungi</Link>

            <div className="categories">
                <ul>
                    {
                        categories.map(category => (
                            <li key={`category_list_${category.id}`}>{category.name} <button onClick={() => deleteCategory(category.id)}>Elimina</button></li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default Categories;