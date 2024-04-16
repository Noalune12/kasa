import Banner from '../../assets/banner.png'
import './style.scss'
import Card from '../../components/Card';
import { useFetch } from '../../utils/usefetch'
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import React, { useEffect } from 'react';

function Home () {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      let jsonPath;
    if (process.env.NODE_ENV === 'production') {
        // Sur GitHub Pages
        jsonPath = '/logements.json';
    } else {
        // En local
        jsonPath = window.location.origin + '/logements.json';
    }

    const annonces = useFetch(jsonPath)
    if(annonces.isLoading) {
        return <Loading />;
    }
    if (annonces.error) {
        return <Error />;
    }

        return (
    <div className='home-page'>
        <div className='home-banner'>
            <img src= {Banner} alt='Banner Home Page' className='home-banner-img'></img>
            <h1 className='home-banner-title'>Chez vous,  <br className="mobile-only" />partout et ailleurs</h1>
        </div>  
        <div className='home-cards-container'>
            {annonces.data.map((annonce) => (
                <Card
                    key={annonce.id}
                    link={`/annonce/${annonce.id}`}
                    title={annonce.title}
                    cover={annonce.cover}
                />
            ))}
        </div>     
    </div>
        );
}

export default Home