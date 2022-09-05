import s from "./Auth.module.css";

const Register = () => {
  return (
    <form className={s.root}>
      <input type="email" />
      <input type="password" />
      <input type="password" />
      <button>let's go</button>
    </form>
  );
};

export default Register;
