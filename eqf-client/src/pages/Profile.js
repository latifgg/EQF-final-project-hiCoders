
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
console.log("user-profiledan", user)
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
      <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
        <img src={user.picture} alt={user.name} className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
        </Col>
        <Col md>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </Col>
      </Row>
      </Container>
    
  );
};


export default withAuthenticationRequired(Profile, {
  onRedirecting: () => "<Loading... />",
});