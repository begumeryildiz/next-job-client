import { Button, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Card } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <div className="col">
          <Image src="/next-job-home-header4.png" className="background-cover img-fluid fluid mx-auto d-block w-100" alt="homepage header" />
        </div>
      </header>
      <div className='container'>
        <div className="row my-2 py-5">
          <div class="feature col-md-9 fs-1 text-center fw-bold bg-gradient p-3">
            <h1>Connecting The Right People To The Right Businesses</h1>
          </div>

          <div class="feature col-md-3 text-center p-3">
            <NavLink to="/signup">
              <Button className="bg-gradient text-white px-5 py-2 mb-4" >Create an Account</Button>
            </NavLink>
          </div>
          <div className="album my-5 pb-2 px-4">
            <div className="row row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4 ms-1">
              <div className="col my-4" >
                <Card style={{ width: '18rem' }} className="border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/next-job-icon6.png" style={{ height: "65px" }} />
                      <h2>Companies</h2>
                    </Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra lectus, ac dapibus metus. Vivamus sodales ante nec enim tincidunt luctus. In mauris ante, suscipit in dignissim dapibus, ornare vel elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col my-4" >
                <Card style={{ width: '18rem' }} className="border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/next-job-icon4.png" style={{ height: "65px" }} />
                      <h2>Jobs</h2>
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra lectus, ac dapibus metus. Vivamus sodales ante nec enim tincidunt luctus. In mauris ante, suscipit in dignissim dapibus, ornare vel elit.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col my-4" >
                <Card style={{ width: '18rem' }} className="border-0" >
                  <Card.Body>
                    <Card.Title>
                      <Image src="/next-job-icon5.png" style={{ height: "65px" }} />
                      <h2>Candidates</h2>
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra lectus, ac dapibus metus. Vivamus sodales ante nec enim tincidunt luctus. In mauris ante, suscipit in dignissim dapibus, ornare vel elit. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HomePage; 