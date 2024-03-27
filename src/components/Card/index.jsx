import './style.scss'
import { Link } from 'react-router-dom';


function Card({cover, title, link}) {
    return (
        <div className="home-card">
            <Link to={link}>
                <img src={cover} alt="" className="card-img"/>
                <h2 className="card-title">{title}</h2>
            </Link>
        </div>
    );
}

export default Card