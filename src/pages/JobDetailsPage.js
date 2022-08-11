import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"


function JobDetailsPage(props) {
    const [job, setJob] = useState(null);
    const [message, setMessage] = useState("")
    // Get the URL parameter `:jobId` 
    const { jobId } = useParams();

    const storedToken = localStorage.getItem("authToken");

    const { user } = useContext(AuthContext);
    const isOwner = (obj) => (typeof (user) !== 'undefined' && obj.owner === user._id)


    const getJob = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/jobs/${jobId}`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                const oneJob = response.data;
                setJob(oneJob);
            })
            .catch((error) => console.log(error));
    };

    const applyJob = () => {
        setMessage("");
        axios
            .post(`${process.env.REACT_APP_API_URL}/apply/${jobId}`, {},
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                setMessage("An error occurred");
                console.log(error);
            });
    };


    useEffect(() => {
        getJob();
        // eslint-disable-next-line
    }, []);


    return (
        <div className="JobDetails">
            <div className="p-5 bg-image" style={{ backgroundImage: `url(/next-job-header5.png)`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />
            {job && (
                <div className="mx-5">
                    <div className="card mb-5 mx-md-5 bg-light bg-opacity-75 shadow-5-strong shadow-lg" id="no-scale" style={{ marginTop: "-75px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
                        <div className="py-4">
                            <div className="container">
                                <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
                                    <div className="text-center col-md-5 border">
                                        <div className="py-5">
                                            <div className="mb-5">
                                                <h2>{job.title}</h2>
                                            </div>
                                            <div>
                                                <p><strong>Company:</strong> {job.company.name}</p>
                                                <p><strong>Level:</strong> {job.level}</p>
                                                <p><strong>Skills:</strong> {job.skills}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-start col-md-6 px-5">
                                        <p><strong>Job Description:</strong></p>
                                        <p style={{ whiteSpace: 'pre-wrap' }}>{job.description}</p>
                                    </div>
                                </div>


                                {isOwner(job) &&
                                    <div>
                                        <p><strong>Applicants:</strong></p>
                                        <ul style={{ listStyleType: 'none' }}>
                                            {job.applicants.map((applicant) => {
                                                return (<li key={applicant._id}><NavLink to={`/candidates/${applicant._id}`}>{applicant.firstName + " " + applicant.lastName}</NavLink></li>)
                                            })}
                                        </ul>
                                    </div>}
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <NavLink className="mx-4" to="/jobs">
                            <Button className="bg-gradient  text-white px-5 mb-4">Back to Jobs</Button>
                        </NavLink>

                        {user.userType === "candidate" &&
                            <Button className="bg-gradient btn-info fw-bold text-white px-5 mb-4" onClick={applyJob}>Apply the Job</Button>}


                        {isOwner(job) && <NavLink to={`/jobs/edit/${jobId}`}>
                            <Button className="bg-gradient text-white px-5 mb-4">Edit Job</Button>
                        </NavLink>}
                    </div>
                    <p>{message}</p>
                </div>
            )
            }
        </div >
    );
}

export default JobDetailsPage;