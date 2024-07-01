import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosClient";

const PhotosContext = createContext()


const PhotosProvider = ({ children }) => {

    const [photosHome, setPhotosHome] = useState([]);

    const [categories, setCategories] = useState([]);

    const [search, setSearch] = useState('');

    const getApi = async () => {
        const photosData = await axios.get('/home');

        const categoriesData = await axios.get('/categories');

        setPhotosHome(photosData.data.photos);

        setCategories(categoriesData.data.categories);
    }

    const searchTitle = (title) => {
        setSearch(title)
    }


    useEffect(() => {
        getApi();
    }, [])

    const value = {
        photosHome,
        categories,
        searchTitle,
        search
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