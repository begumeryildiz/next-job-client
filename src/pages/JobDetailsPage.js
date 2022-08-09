import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"


function JobDetailsPage(props) {
    const [job, setJob] = useState(null);
    // Get the URL parameter `:jobId` 
    const { jobId } = useParams();

    const storedToken = localStorage.getItem("authToken");

    const { user } = useContext(AuthContext);
    const isOwner = (obj) => (typeof(user) !== 'undefined' && obj.owner === user._id)


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
                        <div className="my-5 py-4">

                            <div className="text-center col">
                                <div className="p-4">
                                    <div className="mb-5">
                                        <h2>{job.title}</h2>
                                    </div>
                                    <div className="lead">
                                        <p><strong>Company:</strong> {job.company.name}</p>
                                        <p><strong>Level:</strong> {job.level}</p>
                                        <p><strong>Skills:</strong> {job.skills}</p>
                                        <p className="lead font-weight-bold"><strong>Job Description:</strong></p>
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                <NavLink className="mx-4" to="/jobs">
                                    <Button className="bg-gradient  text-white px-5 mb-4">Back to Jobs</Button>
                                </NavLink>

                                {isOwner(job) && <NavLink to={`/jobs/edit/${jobId}`}>
                                    <Button className="bg-gradient text-white px-5 mb-4">Edit Job</Button>
                                </NavLink>}
                            </div>

                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default JobDetailsPage;