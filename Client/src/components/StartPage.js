
import Link from "next/link";
import classes from "./StartPage.module.css";
import { sendGTMEvent } from '@next/third-parties/google';

const Home = () => {

  const handleClick = () => {
   // sendGTMEvent({ event: 'buttonClicked', value: 'xyz' });   
    console.log("click")
  };
  
  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <div className={classes.homeMain}>
          <div>
            <h1>ResqFeast.</h1>
            <h6>Together, We can make a difference!</h6>
            <span className={classes.goToLogin}>
              <Link href="/login/user">
                <a onClick={handleClick}>User ?</a>
              </Link>
              <Link href="/login/distributor">
                <a>Distributor ?</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

