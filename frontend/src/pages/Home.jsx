import Card from "../components/partials/Card";
import Message from "../components/partials/Message";
import { usePhotos } from "../contexts/PhotosContext";


function Home() {
    const { photosHome } = usePhotos();

    return (
        <div className="container">
            <h1>Home</h1>
            <div className="container-card d-flex flex-wrap justify-content-evenly gap-4">

                {
                    photosHome.map(photo => <Card key={`card_photo_dashboard_${photo.id}`} photo={photo} />)
                }
            
            </div>
            <Message/>
        </div>
    )
}

export default Home;