import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';



function AddEditCandidate(props) {
    const [candidateId, setCandidateId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [image, setImage] = useState("");
    const [linkedin, setLinkedin] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const storedToken = localStorage.getItem("authToken");

    const getCandidate = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/myprofile`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                const oneCandidate = response.data;

                if (typeof (oneCandidate._id) !== "undefined") {
                    setCandidateId(oneCandidate._id);
                }
                setFirstName(oneCandidate.firstName);
                setLastName(oneCandidate.lastName);
                setRole(oneCandidate.role);
                setEmail(oneCandidate.email);
                setPhone(oneCandidate.phone);
                setLocation(oneCandidate.location);
                setAbout(oneCandidate.about);
                setSkills(oneCandidate.skills);
                setImage(oneCandidate.image);
                setLinkedin(oneCandidate.linkedin)
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCandidate();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMsg("");

        const requestBody = {
            firstName,
            lastName,
            role,
            email,
            phone,
            location,
            about,
            skills,
            image,
            linkedin
        }

        if (candidateId === "") {
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/candidates`,
                    requestBody,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const newCandidateId = response.data._id;
                    console.log(response)
                    navigate(`/candidates/${newCandidateId}`);
                })
                .catch((error) => console.log(error));
        } else {
            axios
                .put(
                    `${process.env.REACT_APP_API_URL}/candidates/${candidateId}`,
                    requestBody,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const candidateId = response.data._id;
                    navigate(`/candidates/${candidateId}`);
                })
                .catch((error) => console.log(error));
        }

    };

    return (
        <div className="text-center">

            <div className="p-5 bg-image" style={{ backgroundImage: `url(next-job-header3.png)`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize:"cover" }} />


            <div className="card mx-4 mb-3 mx-md-5 bg-light bg-opacity-75 shadow-5-strong shadow-lg" id="no-scale" style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
                <div className="card-body py-2 px-md-5">

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-4">Candidate Profile</h2>
                            {errorMsg &&
                                <p classNameName="error">
                                    {errorMsg}
                                </p>
                            }
                            <Form onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">First Name</label>
                                            <input type="text"
                                                name="firstName"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">Last Name</label>
                                            <input type="text"
                                                name="lastName"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">Profile Picture</label>
                                            <input type="text"
                                                name="image"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)} className="form-control-file form-control"
                                                accept="image/png, image/jpeg, image/jpg" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label" >Email</label>
                                            <input type="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">Phone Number</label>
                                            <input type="text"
                                                name="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">Current Location</label>
                                            <input type="text"
                                                name="location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">About</label>
                                            <textarea type="text"
                                                name="about"
                                                value={about}
                                                onChange={(e) => setAbout(e.target.value)} cols="30" rows="4" className="form-control" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">Primary Role</label>
                                            <input type="text"
                                                name="role"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">Skills</label>
                                            <input type="text"
                                                name="skills"
                                                value={skills}
                                                onChange={(e) => setSkills(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4">
                                        <div className="form-outline">
                                            <label className="form-label">LinkedIn Profile Link</label>
                                            <input type="text"
                                                name="linkedin"
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)} className="form-control" required></input>
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit"
                                    className="bg-gradient text-white px-4 mb-4">Save Changes</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddEditCandidate;

