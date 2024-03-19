import Carousel from "@/components/Carousel";
import classes from "./home.module.css";

const slides = [
  "/assets/coverimg.jpg",
  "/assets/coverimg3.jpg",
  "/assets/coverimg4.jpg",
  "/assets/coverimg5.jpg",
];

function Card({ image, title, text, buttonText }) {
  return (
    <div className={classes.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <br />
      <p>{text}</p>
      <br />
      <a href="#" className={classes.btn}>
        {buttonText}
      </a>
    </div>
  );
}

const Home = () => {
  return (
    <div className={classes.main}>
      {/* ..........Image Slide.......... */}

      <div className={classes.coverimg}>
        {/* <img src="/assets/coverImg.png" alt="anyhthi" /> */}
        <Carousel autoSlide={true} autoSlideInterval={3000}>
          {slides.map((s) => (
            <img src={s} alt="..." />
          ))}
        </Carousel>
      </div>

      {/* .........Cover Text......... */}

      <div className={classes.coverText}>
        <div className={classes.largeCoverText}>
          Save.
          <br /> Replenish.
        </div>
        <br />
        <div className={classes.smallCoverText}>
          Together, we can turn surplus into sustenance and make
          <br /> a meaningful impact on the lives of those in need.
        </div>
        <br />
        <div className={classes.coverTextButtons}>
          <button>Discover</button>
          <button>Contact Us</button>
        </div>
      </div>

      {/* ............section-1............ */}

      <div className={classes.sec1}></div>

      {/* ............section-2............ */}

      <div className={classes.sec2}>
        <Card
          image="/assets/join-the-movement-2.jpg"
          title="Join the Movement"
          text="Rescue surplus food. Feed hungry mouths. Be a hero."
          buttonText="Get Involved"
        />
        <Card
          image="/assets/our-impact.jpg"
          title="Our Impact"
          text="X pounds saved. X meals served. Making every bite count."
          buttonText="View Our Impact"
        />
        <Card
          image="/assets/partner-with-us.jpg"
          title="Partner with Us"
          text="Businesses, volunteers, organizations – let's fight waste together."
          buttonText="Become a Partner"
        />
      </div>
      {/* ............section-3............ */}

      <div className={classes.sec3}>
        <h1>Take the First Step</h1>
        <p>
          Every journey begins with a single step. Are you ready to take yours?
          Join FoodRescue today and be a catalyst for change. Together, let's
          make hunger a thing of the past.
        </p>
      </div>

      {/* ............section-4............ */}

      <div className={classes.sec4}>
        <div className={classes.infoitem}>
          <span className={classes.symbol}>
            <img src="/assets/fresh.png" alt="..." />
          </span>
          <p>Fresh Produce Rescued</p>
        </div>
        <div className={classes.infoitem}>
          <span className={classes.symbol}>
            <img src="/assets/volunteer-hours-contributed.png" alt="..." />
          </span>
          <p>Volunteer Hours Contributed</p>
        </div>
        <div className={classes.infoitem}>
          <span className={classes.symbol}>
            {" "}
            <img src="/assets/meals-provided.png" alt="..." />
          </span>
          <p>Meals Provided</p>
        </div>
        <div className={classes.infoitem}>
          <span className={classes.symbol}>
            {" "}
            <img src="/assets/environmental.png" alt="..." />
          </span>
          <p>Environmental Impact</p>
        </div>
        <div className={classes.infoitem}>
          <span className={classes.symbol}>
            {" "}
            <img src="/assets/partnership.png" alt="..." />
          </span>
          <p>Partnerships Established</p>
        </div>
      </div>

      {/* ............footer............ */}
      <footer className={classes.footer}>
        <div className={classes.footercontent}>
          <div className={classes.logo}>
            <img src="/assets/symbol.png" alt="Company Logo" />
          </div>
          <div className={classes.links}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/ourstory">About Us</a>
              </li>
              <li>
                <a href="/discoer">Services</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
