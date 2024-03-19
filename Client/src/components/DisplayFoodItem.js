import classes from "./DisplayFoodItem.module.css";

const DisplayFoodItem = ({
  title,
  description,
  address,
  location,
  image,
  expiryDate,
}) => {
  return (
    <div className={classes.foodItemCard}>
      {/* Left Part */}
      <div className={classes.leftPart}>
        <div className={classes.leftContent}>
          <h2 className={classes.title}>Food for 20pax{title}</h2>
          <p className={classes.description}>
            Indulge in a delightful feast with our surplus food package designed
            to satisfy the tastes of 20 persons.{description}
          </p>
          <div className={classes.addressContainer}>
            <div className={classes.addressIcon}>
              <img src="/assets/address.png" alt="..." />
            </div>
            <p className={classes.address}>
              17,hotel taj,sp ring road,ahmedabad {address}
            </p>
          </div>
          <div className={classes.locationContainer}>
            <div className={classes.locationIcon}>
              <img src="/assets/google-maps.png" alt="..." />
            </div>
            <p className={classes.location}>locatibo libkdd{location}</p>
          </div>
          <p className={classes.expiryDate}>
            Expiry Date:17/11/2024 {expiryDate}
          </p>
        </div>
      </div>
      {/* Right Part */}
      <div className={classes.rightPart}>
        <div className={classes.imageContainer}>
          <img
            src="/assets/surplus-food-1.jpeg"
            alt={title}
            className={classes.foodImage}
          />
        </div>
        <div className={classes.buttons}>
          <button className={classes.callButton}>Call</button>
          <button className={classes.messageButton}>Message</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayFoodItem;
