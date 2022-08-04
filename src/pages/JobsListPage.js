import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function JobsListPage() {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/jobs`)
      .then((response) => setJobs(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllJobs();
  }, [] );


  return (
    <div className="JobsListPage">

        {jobs.map((job) => {
          return (
            <div className="JobCard card" key={job._id} >
              <NavLink to={`/jobs/${job._id}`}>
                <h3>{job.title}</h3>
              </NavLink>
            </div>
          );
        })}     

    </div>
  );
}

export default JobsListPage;