import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="NavBar">
           <NavLink to="/" >Home</NavLink> | 
           <NavLink to="/jobs" >Jobs</NavLink> | 
           <NavLink to="/companies" >Companies</NavLink> | 
           <NavLink to="/candidates" >Candidates</NavLink>
        </nav>
    );
}

export default Navbar; 