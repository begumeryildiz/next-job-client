import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";

function NavBar() {
    let location = useLocation();

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <Navbar  className ="navbar fw-bold bg-gradient" fixed="sticky" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container >
                <Nav.Link href="/">
                    <Image src="/next-job-logo-white.png" height="30" className=" rounded d-inline-block align-text-top" alt="logo" />
                </Nav.Link>
                <Navbar.Brand href="/">NEXT JOB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname} className="me-auto">
                        <Nav.Link className="fw-bold" href="/jobs" >Jobs</Nav.Link>
                        <Nav.Link className="fw-bold" href="/companies" >Companies</Nav.Link>
                        <Nav.Link className="fw-bold" href="/candidates" >Candidates</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn && (
                            <>
                                {user.userType === "user" && (
                                    <Nav.Link href="/myprofile" >My Profile</Nav.Link>
                                )}
                                {user.userType === "company" && (
                                    <Nav.Link href="/mycompany" >My Company</Nav.Link>
                                )}
                                <div className="text-white my-2 mx-2 px-2">{user && user.name}</div>
                                <Button className="bg-gradient" variant="light" onClick={logOutUser}>Logout</Button>
                            </>
                        )}


                        {!isLoggedIn && (
                            <>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;





