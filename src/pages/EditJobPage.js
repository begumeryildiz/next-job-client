import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function EditJobPage(props) {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("")
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [level, setLevel] = useState("");

  const { jobId } = useParams();
  const navigate = useNavigate();  


  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/jobs/${jobId}`)
      .then((response) => {
        const oneJob = response.data;
        setTitle(oneJob.title);
        setCompany(oneJob.company.name)
        setDescription(oneJob.description);
        setSkills(oneJob.skills);
        setLevel(oneJob.level);
      })
      .catch((error) => console.log(error));
    
  }, [jobId]);
  
  const handleFormSubmit = (e) => {                     
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
        title: title,
        description :description,
        skills: skills,
        level: level
    };

    // Make a PUT request to update the job
    axios
    .put(
      `${process.env.REACT_APP_API_URL}/jobs/${jobId}`, 
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
  )
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/jobs/${jobId}`)
      });
  };

  const deleteJob = () => {                  
    // Make a DELETE request to delete the job
    axios
    .delete(
      `${process.env.REACT_APP_API_URL}/jobs/${jobId}`, 
      { headers: { Authorization: `Bearer ${storedToken}` } }
  )
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of jobs.
        navigate("/jobs");
      })
      .catch((err) => console.log(err));
  };  
  
  return (
    <div className="EditJobPage">
      <h3>Edit the Job</h3>

      <form onSubmit={handleFormSubmit}>
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
            </form><br />
      <button onClick={deleteJob}>Delete Job</button>
    </div>
  );
}

export default EditJobPage;