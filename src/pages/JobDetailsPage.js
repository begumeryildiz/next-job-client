import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';


function JobDetailsPage(props) {
    const [job, setJob] = useState(null);
    // Get the URL parameter `:jobId` 
    const { jobId } = useParams();


    const getJob = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/jobs/${jobId}`)
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
            <div className="p-5 bg-image" style={{ backgroundImage: `url(/next-job-header4.png)`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />
            {job && (
                <div className="mx-5">
                    <div className="card mb-5 mx-md-5 bg-light bg-opacity-75 shadow-5-strong shadow-lg" id="no-scale" style={{ marginTop: "-75px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
                        <div className="my-5 py-4">
                            <div className="container my-5 dark-grey-text mt-2 px-4 bg-light bg-opacity-25">
                                <div className="text-center col">
                                    <div className="p-4">
                                        <div className="mb-3">
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
                                        <Button className="bg-gradient text-white px-5 mb-4">Back to Jobs</Button>
                                    </NavLink>

                                    <NavLink to={`/jobs/edit/${jobId}`}>
                                        <Button className="bg-gradient text-white px-5 mb-4">Edit Job</Button>
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default JobDetailsPage;