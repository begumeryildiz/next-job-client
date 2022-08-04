import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";


function CandidateDetailsPage(props) {
    const [candidate, setCandidate] = useState(null);
    // Get the URL parameter `:candidateId` 
    const { candidateId } = useParams();


    const getCandidate = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/candidates/${candidateId}`)
            .then((response) => {
                const oneCandidate = response.data;
                setCandidate(oneCandidate);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCandidate();
    // eslint-disable-next-line
    }, []);


    return (
        <div className="CandidateDetails">
            {candidate && (
                <>
                     
                    <h1>{candidate.firstName} {candidate.lastName}</h1>
                    <img src={candidate.image} alt="candidate"/> 
                    <p>Primary Role: {candidate.role}</p>
                    <p>Email: {candidate.email}</p>
                    <p>Phone: {candidate.phone}</p>
                    <p>Current Location: {candidate.location}</p>
                    <p>About: {candidate.about}</p>
                    <p>Skills: {candidate.skills}</p>
                    <a href={candidate.linkedin} >LinkedIn Profile</a> <br /><br />
                </>
            )}

            <NavLink to="/candidates">
                <button>Back to candidates</button>
            </NavLink>

            <NavLink to={`/candidates/edit/${candidateId}`}>
                <button>Edit Candidate</button>
            </NavLink>

        </div>
    );
}

export default CandidateDetailsPage;