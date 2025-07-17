import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link reloadDocument to="/" >Anime</Link>
            </div>
            <div className="navbar-links">
                <Link reloadDocument to="/" className="navbar-link">Home</Link>
                <Link to="/favorites" className="navbar-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar;