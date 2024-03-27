import './style.scss';
import WhiteLogo from '../../assets/white-logo.png'

function Footer () {
    return (
    <footer>
        <img src={WhiteLogo} alt="Logo Kasa White" className='footer-logo'></img>
        <p>© 2024 Kasa. All rights reserved</p>
    </footer>
        );
}

export default Footer