import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";

import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { redirect } = useContext(AuthContext);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container fluid className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center ">
            {isAuthenticated ? (
              <>
                <p>You are already logged in</p>
                <button
                  className="btn btn-danger mb-3"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </>
            ) : (
              <p>
                You are redirected to AUTH0 Login Page <br></br>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() =>
                    loginWithRedirect({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Login
                </button>
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
