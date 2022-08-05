import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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

                if(typeof(oneCandidate._id) !== "undefined"){
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
        <div className="AddCandidate">
            <h3>Candidate Profile</h3>

            {errorMsg &&
                <p className="error">
                    {errorMsg}
                </p>
            }

            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                /><br /><br />

                <label>Primary Role:</label>
                <input
                    type="text"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                /><br /><br />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                /><br /><br />

                <label>Current Location:</label>
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /><br /><br />

                <label>About:</label>
                <textarea
                    type="text"
                    name="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                /><br /><br />

                <label>Skills:</label>
                <input
                    type="text"
                    name="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                /><br /><br />

                <label>Image:</label>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                /><br /><br />

                <label>LinkedIn Profile Link:</label>
                <input
                    type="text"
                    name="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddEditCandidate;

