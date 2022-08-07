import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Image, Form } from 'react-bootstrap';



function SignupPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [userType, setUserType] = useState("candidate");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();


    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const requestBody = { email, password, username, userType }; // Create an object representing the request body

        // Make an axios request to the API
        // If POST request is successful redirect to login page
        // If the request resolves with an error, set the error message in the state
        axios.post(`${process.env.REACT_APP_API_URL}/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.errorMessage;
                setErrorMessage(errorDescription);
            })
    };

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card shadow-lg" id="no-scale" >
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <Image src="/next-job-sign-up.png" alt="signup form" className="img-fluid h-100 rounded shadow-lg" />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">

                                    <Form onSubmit={handleSignupSubmit}>

                                        <div className="feature-icon d-flex align-items-center mb-3 pb-1">

                                            <Image className="mx-auto" src="/next-job-logo1.png" width={"100"} />
                                        </div>


                                        <h5 className="fw-normal mb-3 pb-3 text-primary fw-bold">Create your account</h5>
                                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Username</label>
                                            <input type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)} className="form-control form-control-lg"
                                                placeholder="nextjob" required />



                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Email address</label>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg"
                                                placeholder="job@nextjob.com" required />


                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg"
                                                placeholder="********" required />


                                        </div>
                                        <div className="form-outline my-4">
                                            <label className="form-label">Please Select User Type</label>
                                            <select className="form-control form-control-lg form-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
                                                <option value="candidate" >Candidate</option>
                                                <option value="company">Company</option>
                                            </select>

                                        </div>

                                        <div className="pt-1 mb-4">
                                            <Button className="btn btn-primary bg-gradient btn-lg w-100" type="submit">Register</Button>
                                        </div>
                                        <p className="mb-4 pb-lg-2">Already have an account? Click
                                            <NavLink to={"/login"}> Login</NavLink> to login.</p>
                                        <div>
                                            <NavLink to="#!" className="small text-muted">Terms of use.</NavLink>
                                            <NavLink to="#!" className="small text-muted">Privacy policy</NavLink>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default SignupPage;
