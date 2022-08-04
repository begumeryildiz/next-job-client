import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);  

    return (
        <nav className="NavBar">
           <NavLink to="/" >Home</NavLink>  | 
           <NavLink to="/jobs" >Jobs</NavLink>  | 
           <NavLink to="/companies" >Companies</NavLink>  | 
           <NavLink to="/candidates" >Candidates</NavLink>  | 


           {isLoggedIn && (
                <>
                    <span> Hi, {user && user.name}</span> 
                    &nbsp;
                    <button onClick={logOutUser}>Logout</button>
                </>
            )}

            {!isLoggedIn && (
                <>
                    <NavLink to="/signup">Sign Up</NavLink> | 
                    <NavLink to="/login">Login</NavLink>
                </>
            )}
        </nav>
    );
}

export default Navbar; 