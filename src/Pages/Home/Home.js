import { Link } from "react-router-dom";

import logo from "../../Assets/Images/logo.png";
import s from "./Home.module.css";

function Home() {
  return (
    <main className={s.root}>
      <section className={s.home_start} data-testid="home_start">
        <img src={logo} alt="home fit" className={s.logo} />
        <div className={s.links}>
          <Link to={"/register"} className={s.link}>
            Sign up
          </Link>
          <Link to={"/login"} className={s.link}>
            Login
          </Link>
          <h3>or</h3>
          <Link to={"/random"} className={s.link}>
            Just train!
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
