import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './style.scss';




function Header () {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" className='header-logo' />
            </Link>
            <nav className='nav-links'>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
        </header>
    );
}

export default Header;