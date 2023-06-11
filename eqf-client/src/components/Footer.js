import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-5" style={{color:"white"}}>
      <Container className='d-flex justify-content-center'>
        <Row>
          <Col>
           EQF © 2023 All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
