import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosClient";

const PhotosContext = createContext()


const PhotosProvider = ({ children }) => {

    const [photosHome, setPhotosHome] = useState([]);

    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState('');

    const getPhotosHome = async () => {
        const data = await axios.get('/home');
        setPhotosHome(data.data.photos);

    }

    const getCategories = async () => {
        const data = await axios.get('/categories');
        setCategories(data.data.categories);
    }

    const searchTitle = (title) => {
        setSearch(title)
    }

    const onChange = () => {
        getCategories();
    }
    
    
    useEffect(() => {
        getPhotosHome();
        getCategories();
    }, [])

    const value = {
        photosHome,
        categories,
        searchTitle,
        search,
        onChange
    }

    return (
        <PhotosContext.Provider value={value}>
            {children}
        </PhotosContext.Provider>
    )
}

const usePhotos = () => {
    const value = useContext(PhotosContext);
    return value;
}

export {PhotosProvider, usePhotos};