"use client";
import Link from "next/link";
import classes from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/distributor/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();

      console.log(json);

      if (json.success === true) {
        localStorage.setItem("auth-token", json.authtoken);
        localStorage.setItem("web-user", "Distributor");
        router.push("/home/add");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <div className={classes.loginForm}>
          <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <br />
            <p>
              Doesn't have account yet ?
              <Link href="/signup/distributor"> Sign Up</Link>
            </p>
            <br />
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={(event) => {
                onChangeHandler(event);
              }}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={(event) => {
                onChangeHandler(event);
              }}
            />
            <br />
            <a href="#" style={{ fontSize: "10px" }}>
              Forget Password?
            </a>
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
