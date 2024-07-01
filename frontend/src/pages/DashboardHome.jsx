import { useEffect, useState } from "react";
import axios from "../utils/axiosClient";
import Card from "../components/partials/Card";
import { usePhotos } from "../contexts/PhotosContext";


function DashboardHome() {

    const [photos, setPhotos] = useState([]);

    const { search } = usePhotos();

    const getApi = async () => {
        const photosData = await axios.get(`/photos/?title=${search}`);
        setPhotos(photosData.data);

    }

    useEffect(() => {
        getApi();
    }, [search])

    return (
        <div className="container pt-3">
            <h1>Dashboard</h1>
            <div className="container-card d-flex flex-wrap justify-content-evenly gap-4">

            {
                photos.map(photo => <Card key={`card_photo_dashboard_${photo.id}`} photo={photo} />)
            }

            </div>

        </div>
    )
}

export default DashboardHome;