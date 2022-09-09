import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../Assets/Images/logo.svg";

import s from "./Home.module.css";

function Home() {
  return (
    <main className={s.root}>
      <section className={s.home_start} data-testid="home_start">
        <Logo className={s.logo} />
        <div className={s.links}>
          <Link to={"/register"} className={s.link}>
            Sign up
          </Link>
          <Link to={"/login"} className={s.link}>
            Login
          </Link>
          <Link to={"/random"} className={s.link}>
            Just train!
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
