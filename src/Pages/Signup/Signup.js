import s from "./Signup.module.css";

const Signup = () => {
  return (
    <form className={s.root}>
      <input type="email" />
      <input type="password" />
      <input type="password" />
      <button>let's go</button>
    </form>
  );
};

export default Signup;
