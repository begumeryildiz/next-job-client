import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddJob(props) {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("")
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [level, setLevel] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const storedToken = localStorage.getItem("authToken");

    const getCompany = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/mycompany`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                const oneCompany = response.data;
                setCompany(oneCompany.name);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCompany();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMsg("");

        const requestBody = {
            title: title,
            description :description,
            skills: skills,
            level: level
        };

        axios
            .post(
                `${process.env.REACT_APP_API_URL}/jobs`,
                requestBody,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                const newJobId = response.data._id;
                navigate(`/jobs/${newJobId}`);
            })
            .catch((error) => console.log(error));
    };


    return (
        <div className="AddJob">
            <h3>Add Job</h3>

            {errorMsg &&
                <p className="error">
                    {errorMsg}
                </p>
            }

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br /><br />

                <label>Company:</label>
                <input
                    type="text"
                    name="company"
                    value={company}
                    disabled
                /><br /><br />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /><br /><br />

                <label>Skills:</label>
                <input
                    type="text"
                    name="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                /><br /><br />

                <label>Level:</label>
                <input
                    type="text"
                    name="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddJob;

