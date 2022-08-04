import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function CandidatesListPage() {
  const [candidates, setCandidates] = useState([]);

  const getAllCandidates = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/candidates`)
      .then((response) => setCandidates(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCandidates();
  }, []);


  return (
    <div className="CandidatesListPage">

        {candidates.map((candidate) => {
          return (
            <div className="CandidateCard card" key={candidate._id} >
              <NavLink to={`/candidates/${candidate._id}`}>
                <h3>{candidate.firstName} {candidate.lastName}</h3>
              </NavLink>
            </div>
          );
        })}     

    </div>
  );
}

export default CandidatesListPage;