import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button, Image } from 'react-bootstrap';


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
            <div className="p-5 bg-image" style={{ backgroundImage: `url(/next-job-header4.png)`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} />
            {candidate && (
                <div className="mx-5">
                     <div className="card mx-5 mb-5 mx-md-5 bg-light bg-opacity-75 shadow-5-strong shadow-lg" id="no-scale" style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
                        <div className="my-5 py-4">
                            <div className="container dark-grey-text mt-2 px-4 bg-light bg-opacity-25">
                                <div className="row wow fadeIn">
                                    <div className="col-md-3">
                                        <Image src={candidate.image} alt="candidate" className="rounded-circle rounded shadow-lg img-fluid w-100" />
                                    </div>
                                    <div className="text-start col-md-5 pt-5">
                                        <div className="p-4">
                                            <div className="mb-3">
                                                <h2>{candidate.firstName} {candidate.lastName}</h2>
                                            </div>
                                            <div className="lead">
                                                <p><strong>Primary Role:</strong> {candidate.role}</p>

                                                <p><strong>Skills:</strong> {candidate.skills}</p>
                                                <p><strong>{candidate.firstName} {candidate.lastName}'s</strong> <Link to={candidate.linkedin} >LinkedIn Profile</Link> <br /><br /></p>
                                            </div>
                                        </div>
                                    </div>
                                  

                                    <div className="text-start col-md-4 pt-5">
                                        <div className="p-4">
                                            <div className="mb-3 pt-4">
                                                <h2> </h2>
                                            </div>
                                            <div className="lead">
                                                <p><strong>Email:</strong> {candidate.email}</p>
                                                <p><strong>Phone Number:</strong> {candidate.phone}</p>
                                                <p><strong>Current Location:</strong> {candidate.location}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-start col-md-3 mb-4" />

                                    <div className="text-start col-md-8 mb-4 ps-4">

                                        <p className="lead font-weight-bold"><strong>About:</strong></p>
                                        <p>{candidate.about}</p>

                                    </div>
                                    


                                    <div className="my-4">
                                        <NavLink to="/candidates">
                                            <Button >Back to candidates</Button>
                                        </NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
    )
}
        </div >
    )
}

export default CandidateDetailsPage;