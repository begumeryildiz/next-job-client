import { Button, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Card } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <div className="col">
          <Image src="/next-job-home-header8.png" className="background-cover img-fluid fluid mx-auto d-block w-100" alt="homepage header" />
        </div>
      </header>
      <div className='container'>
        <div className="row">
          <div className="feature col-md-9 text-center fw-bold bg-gradient p-3">
            <h2 className="text-primary opacity-75">Connecting The Right People To The Right Businesses</h2>
          </div>

          <div className="feature col-md-3 py-3 text-start">
            <NavLink to="/signup">
              <Button className="btn btn-outline-warning btn-rounded fw-bold bg-white" style={{ borderRadius: "40px", color: 'rgb(190, 104, 36)', border: "solid" }} >Create an Account</Button>
            </NavLink>
          </div>
          <div className="album mt-5 pb-2 px-4">
            <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
              <div className="col my-4" >
                <Card className="pagecard mx-2 border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/next-job-icon6.png" style={{ height: "65px" }} />
                      <h4>Building Company</h4>
                    </Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra lectus, ac dapibus metus. Vivamus sodales ante nec enim tincidunt luctus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col my-4" >
                <Card className="pagecard mx-2 border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/next-job-icon4.png" style={{ height: "65px" }} />
                      <h4>Finding Best Job</h4>
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra lectus, ac dapibus metus. Vivamus sodales ante nec enim tincidunt luctus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col my-4" >
                <Card className="pagecard mx-2 border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/next-job-icon5.png" style={{ height: "65px" }} />
                      <h4>Creating Quality Team</h4>
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra lectus, ac dapibus metus. Vivamus sodales ante nec enim tincidunt luctus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <div className="col" >
              <Image src="/next-job-about1.png" className="background-cover img-fluid fluid mx-auto d-block" style={{ height: "400px" }} alt="homepage about1" />
            </div>
            <div className="col" >
              <h1 className='fw-bold mt-5 pt-5 text-primary'>Get your dream job today</h1><br />
              <h3>Explore all the most exciting <span style={{ color: 'rgb(190, 104, 36)' }}><strong>job roles</strong></span> based on your interest and study major.</h3>
            </div>
          </div>
          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <div className="col" >
              <h1 className='fw-bold mt-5 pt-5 text-primary'>Post Your Jobs for Specialists</h1><br />
              <h3>Next Job helps you post your jobs for finding<span style={{ color: 'rgb(190, 104, 36)' }}><strong> your best teammates</strong></span>. Track your candidates all in one place, and take your hiring on the go.</h3>
            </div>
            <div className="col" >
              <Image src="/next-job-about2.png" className="background-cover img-fluid fluid mx-auto d-block" style={{ height: "400px" }} alt="homepage about2" />
            </div>
          </div>
          <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
            <div className="col" >
              <Image src="/next-job-about3.png" className="background-cover img-fluid fluid mx-auto d-block" style={{ height: "400px" }} alt="homepage about1" />
            </div>
            <div className="col" >
              <h1 className='fw-bold mt-5 pt-5 text-primary'>Find The Best for You</h1><br />
              <h3>Our industry expertise will find you <span style={{ color: 'rgb(190, 104, 36)' }}><strong>the right role, person, or service</strong></span> in the evolving digital world.</h3>
            </div>
          </div>
        </div>
      </div>
      <Image src="/next-job-footer1.png" className="background-cover img-fluid fluid mx-auto d-block" alt="homwpage footer"/>
    </div>
  );
}


export default HomePage; 