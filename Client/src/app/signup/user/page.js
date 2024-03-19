"use client";
import Link from "next/link";
import classes from "./signup.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    uname: "",
    email: "",
    password: "",
    retypepass: "",
    contact: "",
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
      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.uname,
          email: credentials.email,
          password: credentials.password,
          contact: credentials.contact,
        }),
      });
      const json = await response.json();
      console.log(json.authtoken);

      if (json.success === true) {
        localStorage.setItem("auth-token", json.authtoken);
        localStorage.setItem("web-user", "User");

        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <div className={classes.signUpForm}>
          <form onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <br />
            <p>
              Already have an account ?<Link href="/login/user"> Login</Link>
            </p>
            <br />
            <label htmlFor="uname">Name</label>
            <br />
            <input
              id="uname"
              type="uname"
              name="uname"
              value={credentials.uname}
              onChange={(event) => onChangeHandler(event)}
            />
            <br />
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={(event) => onChangeHandler(event)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="password"
              value={credentials.password}
              onChange={(event) => onChangeHandler(event)}
            />
            <br />
            <label htmlFor="retypepass">Re-Type Password</label>
            <br />
            <input
              id="retypepass"
              type="password"
              name="retypepass"
              value={credentials.retypepass}
              onChange={(event) => onChangeHandler(event)}
            />
            <br />
            <label htmlFor="contact">Contact</label>
            <br />
            <input
              id="contact"
              type="tel"
              name="contact"
              value={credentials.contact}
              onChange={(event) => onChangeHandler(event)}
            />
            <br />
            <br />
            <br />

            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
