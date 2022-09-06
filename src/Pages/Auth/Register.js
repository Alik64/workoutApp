import s from "./Auth.module.css";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const { loading, error, success, userInfo } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
    if (userInfo) {
      navigate("/user-profile");
    }
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      alert("Password mismatch");
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && error}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-input"
          {...register("name")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-input"
          {...register("email")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          {...register("password")}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Confirm Password</label>
        <input
          type="password"
          className="form-input"
          {...register("confirmPassword")}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        Register
      </button>
    </form>
  );
};
export default Register;
