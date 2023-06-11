import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";


import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../images/logo2r.png";
const Navbar = () => {
  const { logout, isAuthenticated, user, loginWithRedirect } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  

  return (
    <nav style={{ background: 'linear-gradient(to right, rgba(242, 226, 234, 0.5), rgba(144, 144, 233, 0.5))' }}>
      <div className="container d-flex justify-content-between align-items-center pt-1">
        <div className="d-flex">
          <Link to="/" className="logo">
            <img src={logo} style={{ width: "50px", height: "30px" }} />
          </Link>

          <ul className="nav-links d-flex gap-3 ">
            <li>
              <Link className="text-white fw-bold" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-white fw-bold" to="/about">About</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link className="text-white fw-bold" to="/ineedhelp">I Need Help</Link>
              </li>
            )}

            {isAuthenticated && (
              <li>
                <Link className="text-white fw-bold" to="/icanhelp">I Can Help</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link className="text-white fw-bold" to="/forms">FormTable</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="auth-links d-flex gap-3">
          {!isAuthenticated ?
            <Link to="/register">
              <button className="btn btn-primary mb-3">Register</button>{" "}
            </Link>:""}
            {isAuthenticated ? (
              <UncontrolledDropdown
                nav
                inNavbar
                style={{ listStyleType: "none" }}
              >
                <DropdownToggle nav caret id="profileDropDown">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="50"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{user.name}</DropdownItem>
                  <DropdownItem
                    tag={RouterNavLink}
                    to="/profile"
                    className="dropdown-profile"
                    
                  >
                     Profile
                  </DropdownItem>
                  <DropdownItem
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                     Log
                    out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <button
                className="btn btn-primary mb-3"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
