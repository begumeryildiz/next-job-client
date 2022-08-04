import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function CompaniesListPage() {
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/companies`)
      .then((response) => setCompanies(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCompanies();
  }, [] );


  return (
    <div className="CompaniesListPage">

        {companies.map((company) => {
          return (
            <div className="CompanyCard card" key={company._id} >
              <NavLink to={`/companies/${company._id}`}>
                <h3>{company.name}</h3>
              </NavLink>
            </div>
          );
        })}     

    </div>
  );
}

export default CompaniesListPage;