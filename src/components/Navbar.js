import { Link, useLocation } from 'react-router-dom';
import resumeImage from '../Data/resume.pdf';

function Nav() {
    let location = useLocation();
    console.log(location);
    return (
        <nav className='nav nav-tabs' style={{ fontSize: '1.2rem' }}>
            <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/" style={{ color: 'white', backgroundColor: location.pathname === '/' ? 'black' : '' }}>
                <p className='nav-item'>Home</p>
            </Link>
            <Link className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'} to="/projects" style={{ color: 'white', backgroundColor: location.pathname === '/projects' ? 'black' : '' }}>
                <p className='nav-item'>Projects</p>
            </Link>
            <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact" style={{ color: 'white', backgroundColor: location.pathname === '/contact' ? 'black' : '' }}>
                <p className='nav-item'>Contact Page</p>
            </Link>
            <a className='nav-item' target="_blank" href="./Data/resume.pdf" style={{ color: 'white', backgroundColor: location.pathname === '/ID.pdf' ? 'black' : '' }}>
                <p className='nav-link' style={{ color: 'white' }}>Resume</p>
            </a>
        </nav>
    );
}

export default Nav;

