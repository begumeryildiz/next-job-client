import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";


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
    });


    return (
        <div className="JobDetails">
            {job && (
                <>
                    <h1>{job.title}</h1>
                    <p>Company: {job.company.name}</p>
                    <p>Description: {job.description}</p>
                    <p>Skills: {job.skills}</p>
                    <p>Level: {job.level}</p>
                </>
            )}

            <NavLink to="/jobs">
                <button>Back to jobs</button>
            </NavLink>

            <NavLink to={`/jobs/edit/${jobId}`}>
                <button>Edit Job</button>
            </NavLink>

        </div>
    );
}

export default JobDetailsPage;