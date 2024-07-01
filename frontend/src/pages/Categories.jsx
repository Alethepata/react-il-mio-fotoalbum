import { Link } from "react-router-dom";
import { usePhotos } from "../contexts/PhotosContext";
import axios from "../utils/axiosClient";

import { BsFillTrash3Fill } from "react-icons/bs";


function Categories() {

    const { categories, onChange } = usePhotos();

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
                            <li className="mb-3" key={`category_list_${category.id}`}>{category.name} <button onClick={() => deleteCategory(category.id)}><BsFillTrash3Fill /></button></li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default Categories;