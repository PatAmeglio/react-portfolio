import { Link, useLocation } from 'react-router-dom';

function Nav() {
    let location = useLocation()
    console.log(location)
    return (
        <nav className='nav nav-tabs'>
            <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/"><p className='nav-item'>Home</p></Link>
            <Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} to="/about"><p className='nav-item'>About Me</p></Link>
            <Link className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'} to="/projects"><p className='nav-item'>Projects</p></Link>
        </nav>
    )
}

export default Nav;