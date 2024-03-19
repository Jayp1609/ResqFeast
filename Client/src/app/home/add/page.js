"use client";
import React, { useState } from "react";
import classes from "./Add.module.css";
import GoogleMapReact from "google-map-react";

const Add = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState("");

  console.log(location);
  const handleSelect = ({ address }) => {
    setLocation(address);
  };

  // Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.container}>
      <div className={classes.addproductcard}>
        <div className={classes.cardheader}>
          <h2>Add New Item</h2>
        </div>
        <div className={classes.cardbody}>
          <div
            className={classes.imagecontainer}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Product" />
            ) : (
              <div className={classes.placeholder}>
                <p>Drag & Drop or Click to Upload Image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>
          <div className={classes.productdetails}>
            <h3>Title</h3>
            <input type="text" placeholder="Enter title" />
            <h3>Category</h3>
            <input type="text" placeholder="Enter category" />
            <h3>Description</h3>
            <textarea placeholder="Enter description"></textarea>
            <h3>Expiry Date</h3>
            <input type="date" />
            <h3>Location</h3>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div style={{ height: "100%", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
                defaultCenter={{ lat: 0, lng: 0 }}
                defaultZoom={1}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ maps }) => {
                  const autocomplete = new maps.places.Autocomplete(
                    document.getElementById("location-input")
                  );
                  autocomplete.addListener("place_changed", () => {
                    handleSelect({
                      address: autocomplete.getPlace().formatted_address,
                    });
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className={classes.cardfooter}>
          <button className={classes.addbutton}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
