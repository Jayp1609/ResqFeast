import DisplayFoodItem from "@/components/DisplayFoodItem";
import classes from "./Discover.module.css";

const Discover = () => {
  return (
    <div className={classes.main}>
      <div className={classes.coverimg}>
        <img src="/assets/discover-coverimg.jpg" alt="..." />
      </div>
      {/* .............sec1............ */}
      <div className={classes.flex}>
        <div className={classes.sec1}>
          <h1>
            Choose the food items
            <br /> you wish to rescue
          </h1>
          <br />
          <p>
            Unite with Us to Combat Food Waste. Your actions directly contribute
            to diverting perfectly good food from landfills to those who can
            benefit from it.
          </p>
        </div>
      </div>
      {/* .............sec2............ */}
      <div className={classes.sec2}>
        <div className={classes.searchcontainer}>
          <input
            type="text"
            placeholder="Search..."
            className={classes.searchbar}
          />
          {/* <button className={classes.searchbutton}>Search</button> */}
          {/* <select className={classes.filterbox}>
            <option value="all">City</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select> */}
        </div>
      </div>
      <div className={classes.sec3}>
        <div className={classes.displayCards}>
          <DisplayFoodItem />
        </div>
      </div>
    </div>
  );
};

export default Discover;
