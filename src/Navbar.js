import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Padgy Soltis</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;