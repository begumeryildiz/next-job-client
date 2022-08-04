import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="NavBar">
           <NavLink to="/" >Home</NavLink> |
           <NavLink to="/jobs" >Jobs</NavLink>
        </nav>
    );
}


export default Navbar; 