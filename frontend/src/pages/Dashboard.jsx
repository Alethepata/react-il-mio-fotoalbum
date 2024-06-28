import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";


function Dashboard() {

    const [photos, setPhotos] = useState([]);

    const getApi = async () => {
        const photosData = await axios.get('/photos');

        setPhotos(photosData.data);

    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <div className="container">
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard;