import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <NavLink to="/ineedhelp">
            <Button  size="lg" className='ineedhelp btn btn-warning'>I Need Help</Button>
          </NavLink>
        </Col>
        <Col md={6} className="text-center ">
          <NavLink to="/icanhelp">
            <Button  size="lg" className='icanhelp btn btn-success'>I Can Help You</Button>
          </NavLink>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
      <Col md={6} className="text-center ">
          <Link to="/usefulLinks">
            <Button variant="primary" size="lg" className='usefulLinks'>Useful Links</Button>
          </Link>
        </Col>
        
      </Row>
</Container>
)};

export default Home;