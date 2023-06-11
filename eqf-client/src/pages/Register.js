import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const {
    isAuthenticated,
    logout,
    login,
    register,
    username,
    password,
    email,
    confirmPassword,
    setConfirmPassword,
  } = useContext(AuthContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
      toast.success("Kaydiniz başarıyla yapildi!");
        
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Register</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <Link to="/login" className="btn btn-link">
                  Already have an account? Login here.
                </Link>
              </form>
            </div>
            {/* {isSubmitted && (
        <div className="confirmation">
          <p>Formunuz başarıyla gönderildi!</p>
          <button onClick={() => setIsSubmitted(false)}>Tekrar Gönder</button>
        </div>
      )} */}
      <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
