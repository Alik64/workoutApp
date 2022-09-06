import s from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginScreen = () => {
  const { register, handleSubmit } = useForm();
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/user-profile");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  console.log("error : ", error);
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
