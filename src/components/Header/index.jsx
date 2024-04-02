import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './style.scss';
import { NavLink } from 'react-router-dom';




function Header () {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" className='header-logo' />
            </Link>
            <nav className='nav-links'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;