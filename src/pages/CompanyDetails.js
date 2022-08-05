import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";


function CompanyDetailsPage(props) {
    const [company, setCompany] = useState(null);
    // Get the URL parameter `:companyId` 
    const { companyId } = useParams();


    const getCompany = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/companies/${companyId}`)
            .then((response) => {
                const oneCompany = response.data;
                setCompany(oneCompany);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getCompany();
    // eslint-disable-next-line
    }, []);


    return (
        <div className="CompanyDetails">
            {company && (
                <>
                    <h1>{company.title}</h1>
                    <p>Description: {company.description}</p>
                    <p>Address: {company.address}</p>
                </>
            )}

            {company &&
                company.jobs.map((job) => (
                    <li className="JobsCard card" key={job._id}>
                        <h3>{job.title}</h3>
                        <h4>Description:</h4>
                        <p>{job.description}</p>
                    </li>
                ))}

            <NavLink to="/companies">
                <button>Back to companies</button>
            </NavLink>

            <NavLink to="/jobs">
                <button>Back to jobs</button>
            </NavLink>

            <NavLink to={`/mycompany`}>
                <button>Edit Company</button>
            </NavLink>

        </div>
    );
}

export default CompanyDetailsPage;