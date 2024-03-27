import Banner from '../../assets/banner.png'
import './style.scss'
import Card from '../../components/Card';
import { useFetch } from '../../utils/usefetch'

function Home () {
    const annonces = useFetch(window.location.origin + '/logements.json')
    //Ajouter un loading et error en components
    if(annonces.isLoading) {
        return <p>Chargement en cours...</p>;
    }
    if (annonces.error) {
        return <p>Une erreur s'est produite</p>;
    }
    console.log(annonces)

        return (
    <div className='home-page'>
        <div className='home-banner'>
            <img src= {Banner} alt='Banner Home Page' className='home-banner-img'></img>
            <h1 className='home-banner-title'>Chez vous, partout et ailleurs</h1>
        </div>  
        <div className='home-cards-container'>
            {annonces.data.map((annonce) => (
                <Card
                    key={annonce.id}
                    title={annonce.title}
                    cover={annonce.cover}
                />
            ))}
        </div>     
    </div>
        );
}

export default Home