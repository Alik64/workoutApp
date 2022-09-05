import s from "./Auth.module.css";

const Login = () => {
  return (
    <form className={s.root}>
      <input type="email" />
      <input type="password" />
      <button>let's go</button>
    </form>
  );
};

export default Login;
