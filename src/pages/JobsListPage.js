import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Card, Button, Image } from 'react-bootstrap';


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
  }, []);



  return (
    <div className="JobsListPage">
      <header className="row">

        <div className="col">

          <Image src="/jobs-list-header.png" className="shadow-lg background-cover img-fluid fluid mx-auto d-block opacity-50" alt="jobs header" />
          <div className="carousel-caption "><h1>Hello</h1></div>

        </div>
      </header>
      <div className="container">

        <div className="my-5">
          <h2 className="mb-4 fw-bold">Job Listing</h2>
          <p className=" mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div> <hr />

        <div className="row my-5">
          <div className="col-lg-4 mb-2-2 mb-lg-0">
            <div className="card card-style13">
              <div className="card-body">
                <span className="icon-circle green mb-4"><i className="ti-bar-chart"></i></span>
                <h3 className="h5 fw-bold">Ability to Work</h3>
                <p className="w-95 w-lg-100 display-30">We provide quick and detailed answers for your awesome business. It is a long establish grow your business.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-2-2 mb-lg-0">
            <div className="card card-style13">
              <div className="card-body">
                <span className="icon-circle orange mb-4"><i className="ti-ruler-pencil"></i></span>
                <h3 className="h5 fw-bold">Technical Competency</h3>
                <p className="w-95 w-lg-100 display-30">We provide quick and detailed answers for your awesome business. It is a long establish grow your business.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-style13">
              <div className="card-body">
                <span className="icon-circle blue mb-4"><i className="ti-layers-alt"></i></span>
                <h3 className="h5 fw-bold">Communication Skills</h3>
                <p className="w-95 w-lg-100 display-30">We provide quick and detailed answers for your awesome business. It is a long establish grow your business.</p>
              </div>
            </div>
          </div>
        </div><hr/>
      </div>
      <div className="container mt-5">
        <div className="album my-5 pb-2 px-4 bg-primary bg-opacity-25">

          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4 mb-5">

            {jobs.map((job) => {
              return (
                <div className="col">
                  <Card >
                    <Card.Header className="fw-bold" as="h5">{job.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>Company: {job.company.name}</Card.Title>
                      <Card.Text>
                        Level: {job.level}
                      </Card.Text>
                      <Button variant="primary"><NavLink to={`/jobs/${job._id}`}><p className="text-white m-0">More Details</p></NavLink></Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsListPage;