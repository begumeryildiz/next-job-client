import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";


function AddEditCompany(props) {
    const [companyId, setCompanyId] = useState("");
    const [name, setName] = useState("");
    const [jobs, setJobs] = useState([]);
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const storedToken = localStorage.getItem("authToken");

    const getCompany = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/mycompany`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                const oneCompany = response.data;

                if (typeof (oneCompany._id) !== "undefined") {
                    setCompanyId(oneCompany._id);
                }
                setName(oneCompany.name);
                setJobs(oneCompany.jobs);
                setDescription(oneCompany.description);
                setAddress(oneCompany.address);
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
            name,
            jobs,
            description,
            address
        }

        if (companyId === "") {
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/companies`,
                    requestBody,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const newCompanyId = response.data._id;
                    navigate(`/companies/${newCompanyId}`);
                })
                .catch((error) => console.log(error));
        } else {
            axios
                .put(
                    `${process.env.REACT_APP_API_URL}/companies/${companyId}`,
                    requestBody,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
                )
                .then((response) => {
                    const companyId = response.data._id;
                    navigate(`/companies/${companyId}`);
                })
                .catch((error) => console.log(error));
        }

    };

    return (
        <div className="AddCompany">
            <h3>Company Profile</h3>

            {errorMsg &&
                <p className="error">
                    {errorMsg}
                </p>
            }

            <form onSubmit={handleSubmit}>
                <label>Company Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />

                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /><br /><br />

                <label>Company Location:</label>
                <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                /><br /><br />

                <button type="submit">Submit</button>
            </form><br /><br />

            <NavLink to="/jobs">
                <button>Add jobs</button>
            </NavLink>
        </div>
    );
}

export default AddEditCompany;

