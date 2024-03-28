import Slideshow from "../../components/Slidshow";
import { useFetch } from '../../utils/usefetch'
import { useParams } from "react-router-dom";
import React from "react";
import './style.scss'


function Annonce () {
    const annonces = useFetch(window.location.origin + '/logements.json')
    const {annonceId} = useParams();
    console.log(annonceId)

    let thisAnnonce 
    if(annonces.data) {
        thisAnnonce = annonces.data.find(
            (annonce) => annonce.id === annonceId
        )
    }
    console.log(thisAnnonce)

    if(annonces.isLoading) {
        return <p>Chargement en cours...</p>;
    }
    if (annonces.error) {
        return <p>Une erreur s'est produite</p>;
    }

    return (
        <div className="annonce-page">
            <Slideshow images={thisAnnonce.pictures} />
        </div>
       );
}

export default Annonce