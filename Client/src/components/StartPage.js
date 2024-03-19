import Link from "next/link";
import classes from "./StartPage.module.css";

const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <div className={classes.homeMain}>
          <div>
            <h1>ResqFeast.</h1>
            <h6>Together, We can make a difference!</h6>
            <span className={classes.goToLogin}>
              <Link href="/login/user">
                <button>User ?</button>
              </Link>
              <Link href="/login/distributor">
                <button>Distributor ?</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
