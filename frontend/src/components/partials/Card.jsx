import { Link } from "react-router-dom";

function Card({photo}) {
    return (
        <Link to={`/dashboard/${photo.id}`}>

            <div className="card_custom position-relative">
    
                <figure className="h-100 w-100">
                    <img className="h-100 w-100" src={photo.image} alt="" />
                </figure>
    
                <div className="title position-absolute bottom-0">
                    <h4>{ photo.title }</h4>
                </div>
    
            </div>

        </Link>
    )
}

export default Card;