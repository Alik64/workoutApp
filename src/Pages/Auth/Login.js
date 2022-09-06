import s from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../redux/features/user/userSlice";
import { useLoginMutation } from "../../redux/services/authApi";

const LoginScreen = () => {
  const { register, handleSubmit } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    let result = await login({
      email: data.email,
      password: data.password,
    });
    dispatch(loginUser(result.data));
    console.log("result : ", result);
  };

  const submitForm = (formData) => {
    handleLogin(formData);
    navigate("/user-profile");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
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
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};
export default LoginScreen;
