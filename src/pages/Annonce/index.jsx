import Slideshow from "../../components/Slidshow";
import { useFetch } from '../../utils/usefetch'
import { useParams } from "react-router-dom";
import React from "react";
import './style.scss'
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import Error404 from "../404";
import Error from '../../components/Error';
import Loading from "../../components/Loading";


function Annonce () {
    const annonces = useFetch(window.location.origin + '/logements.json')
    const {annonceId} = useParams();

    let thisAnnonce 
    if(annonces.data) {
        thisAnnonce = annonces.data.find(
            (annonce) => annonce.id === annonceId
        )
    }

    if(annonces.isLoading) {
        return <Loading />;
    }
    if (annonces.error) {
        return <Error />;
    }

    if(!thisAnnonce) {
        return <Error404 />
    } else {
        const fullName = thisAnnonce.host.name;
        const [firstName, lastName] = fullName.split(' ');
        

        return (
            <div className="annonce-page">
                <Slideshow images={thisAnnonce.pictures} />
                <div className="title-location-tags-host-rating">
                    <div className="title-location-tags">
                        <h1 className="annonce-title">{thisAnnonce.title}</h1>
                        <p className="annonce-location">{thisAnnonce.location}</p>
                        <div className="annonce-tags">
                            {thisAnnonce.tags.map((tag, index) =>
                            <p key={`${tag}-${index}`}>{tag}</p>)}
                        </div>
                    </div>
                    <div className="host-rating">
                        <div className="annonce-host">
                            <div className="host-firstname-lastname">
                                <p className="host-name">{firstName}</p>
                                <p className="host-name">{lastName}</p>
                            </div>
                            <img src={thisAnnonce.host.picture} alt="host profile" className="host-photo"/>
                        </div>
                        <Rating rate={thisAnnonce.rating}/>
                    </div>            
                </div>
                <div className="description-equipements">
                    <Collapse title="Description" content={thisAnnonce.description} />
                    <Collapse title="Equipements" content={thisAnnonce.equipments}/>
                </div>
            </div>
        ); 
    }
    
}

export default Annonce