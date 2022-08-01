import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../Assets/Images/logo.svg";
import backgroundVideo from "../../Assets/Videos/home.mp4";
import s from "./Home.module.css";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(
      () => {
        setLoading(false);
        console.log("isLoading");
      },
      5000,
      { once: true }
    );
  }, []);

  return (
    <main className={s.root}>
      {isLoading ? (
        <div className={s.loading}>
          <Logo width={390} />
        </div>
      ) : (
        <section className={s.home_start} data-testid="home_start">
          <video autoPlay loop muted className={s.video}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signup"}>Signin</Link>
          <Link to={"/random"}>Just train!</Link>
        </section>
      )}
    </main>
  );
}
export default Home;
