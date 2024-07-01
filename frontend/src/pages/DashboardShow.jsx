import axios from "../utils/axiosClient";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function DashboardShow(){
  const {id} = useParams();

  const [photos, setPhotos] = useState({});

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  
  const getPhotos =  async (url) => {
    const data = await axios.get(url);
    setPhotos(data.data)
    setCategories(data.data.categories)
    
  }
  
  useEffect(() => {
    getPhotos(`/photos/${id}`)
  }, [id])

  const deletePhoto = async () => {
    await axios.delete(`/photos/${id}`);
    navigate('/dashboard')

  }


  return(
    <div className="container">

      <div>
        <h1>{photos.title}</h1>
        <figure>
          <img src={photos.image} alt={photos.title} />
        </figure>
        <div className="text">
          <p>{photos.description}</p>
          {
            categories.map((category, index) => <span key={`form_datails_tag_${index}`}>#{category.name}</span>)
          } 
        </div>
      </div>

      <div>
        <ul>
          <li>
            <Link to={`/dashboard/photos/${id}/edit`}>Modifica</Link>
          </li>
          <li>
            <button onClick={deletePhoto}>Elimina</button>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default DashboardShow