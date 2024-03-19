"use client";
import Link from "next/link";
import classes from "./NavBar.module.css";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("auth-token");
    localStorage.removeItem("web-user");
    router.push("/");
  };

  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <span className={classes.symbol}>
          <Link href="/home/add">
            {/* <img src="assets/symbol.png" alt="res" /> */}
            <img src="/assets/symbol.png" alt="..." />
          </Link>
        </span>
        <span className={classes.navitems}>
          <ul>
            <li>
              <Link href="/home/add">Add</Link>
            </li>
            <li>
              <Link href="/home/message">Message</Link>
            </li>
            <li>
              <Link href="/home/profile">Profile</Link>
            </li>
            <li>
              <Link href="/home/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/home/ourstory">Our Story</Link>
            </li>
            <li className={classes.logout}>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
