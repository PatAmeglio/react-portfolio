import { Link, useLocation } from 'react-router-dom';

function Nav() {
    let location = useLocation()
    console.log(location)
    return (
        <nav className='nav nav-tabs'>
            <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/"><p className='nav-item'>Home</p></Link>
            <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact"><p className='nav-item'>Contact Page</p></Link>
            <Link className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'} to="/projects"><p className='nav-item'>Projects</p></Link>
            <a className='nav-item' target="_blank" href="/ID.pdf"> <p className='nav-link'>Resume </p></a>
        </nav>

    )
}

export default Nav;