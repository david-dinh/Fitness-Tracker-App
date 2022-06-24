import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <h1><Link to="/" className='title'>Fitness Tracker</Link></h1>
            </nav>
        </header>
    );
}
 
export default Navbar;