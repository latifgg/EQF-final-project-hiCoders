import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  register: () => {}
});
const AuthContextProvider = (props) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const toggleAuth = () => {
    // setIsAuthenticated(!isAuthenticated);
  };

  const register = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", userData);
      console.log(response.data);
      // setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };
  
  const login = () => {
    // setIsAuthenticated(true);
  };

  const logout = () => {
    // setIsAuthenticated(false);
    setUser(null);

  };


  
  return (
    <AuthContext.Provider
      value={{  user, toggleAuth, login, logout, register, username, password, email, redirect, setUsername, setPassword, setEmail, setRedirect, confirmPassword, setConfirmPassword }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
