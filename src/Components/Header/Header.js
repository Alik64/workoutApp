import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../../redux/features/user/userSlice";
import { logout } from "../../redux/features/user/userSlice";
import { useAuthMeQuery } from "../../redux/services/authApi";

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data, isLoading } = useAuthMeQuery();
  // automatically authenticate user if token is found
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [userToken, dispatch]);

  return (
    <header style={{ borderBottom: "1px solid white" }}>
      <div className="header-status">
        <span>
          {userInfo ? `Logged in as ${userInfo.email}` : "You're not logged in"}
        </span>
        <div className="cta">
          {userInfo ? (
            <button className="button" onClick={() => dispatch(logout())}>
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
