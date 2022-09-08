import { useContext } from "react";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  // automatically authenticate user if token is found
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  return (
    <header style={{ borderBottom: "1px solid white" }}>
      <div className="header-status">
        <span></span>
        <div className="cta">
          {currentUser ? (
            <button className="button" onClick={() => setCurrentUser(null)}>
              Logout
            </button>
          ) : (
            <NavLink className="button" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className="container navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/user-profile">Profile</NavLink>
      </nav>
    </header>
  );
};
export default Header;
