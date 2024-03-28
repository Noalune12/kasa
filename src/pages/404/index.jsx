import './style.scss'
import Img404 from '../../assets/404.png'
import { Link } from 'react-router-dom';

function Error404 () {
    return (
        <div className='error-page'>
            <img src={Img404} alt='Erreur 404' className='error-img'/>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link-home'>Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error404