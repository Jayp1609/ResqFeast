const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const FoodDetails = require("../Models/FoodDetails");
require("dotenv").config();
// const bcrypt = require("bcryptjs");
// var jwt = require("jsonwebtoken");
// const JWT_SECRET = process.env.JWT_SECRET;
// var fetchUser = require("../middleware/fetchUser");

//Route-1 Add food info

router.post(
  "/addinfo",
  [
    body("address", "Enter Valid Address").isLength({ min: 5 }),
    body("category", "Enter Valid Category").isLength({ min: 3 }),
    body("date", "Select Date").isLength({ min: 1 }),
    body("description", "Enter Valid Description").isLength({ min: 5 }),
    body("image_url", "Enter Valid ImageUrl").isEmpty(),
    body("title", "Enter Valid Title").isLength({ min: 3 }),
  ],
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      const foodDetails = new FoodDetails({
        address: req.body.address,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description,
        image_url: req.body.image_url,
        title: req.body.title,
      });
      const saveDetails = foodDetails.save();

      success = true;
      res.json({ success, saveDetails });
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error occutrd");
    }
  }
);
//Route-2 Display All Food Info
router.get("/displayinfo", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const foodInfo = await FoodDetails.find();
    res.send(foodInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
