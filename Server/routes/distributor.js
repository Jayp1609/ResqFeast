const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Distributor = require("../Models/DistributorAuth");
require("dotenv").config();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
var fetchUser = require("../middleware/fetchUser");

//<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>
//Route-1 create a Distributor (signup)

router.post(
  "/signup",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email ").isEmail(),
    body("password", "Password must be at leasat 5 characters").isLength({
      min: 5,
    }),
    body("contact", "Enter a Valid Number").isLength(10),
  ],
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    //.findone() checks whether the Distributor with particular email is already in database or not
    try {
      let distributor = await Distributor.findOne({ email: req.body.email });
      if (distributor) {
        return res
          .status(400)
          .json({ success, error: "Email address already exists" });
      }
      //To add salt in the password string
      const salt = await bcrypt.genSalt(10);
      const secPasswd = await bcrypt.hash(req.body.password, salt);
      //To create new Distributor
      distributor = await Distributor.create({
        name: req.body.name,
        password: secPasswd,
        email: req.body.email,
        contact: req.body.contact,
      });

      const data = {
        id: distributor.id,
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Some error occutrd");
    }
  }
);

//<<<<<<<<<<<<>>>>>>>>>>>>
//Route-2  distributor login

router.post("/login", [
  body("email", "Enter a Valid Email ").isEmail(),
  body("password", "Password must be at leasat 5 characters").exists(),
  async (req, res) => {
    let success = false;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let distributor = await Distributor.findOne({ email: req.body.email });

      if (!distributor) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Enter valid credentials(Email not found)" });
      }

      let pass_compare = await bcrypt.compare(
        req.body.password,
        distributor.password
      );
      if (!pass_compare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Enter valid credentials" });
      }

      const data = {
        id: distributor.id,
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  },
]);

//<<<<<<<<>>>>>>>>>>>>
//route-3 Get distributor info

router.post("/getuser", fetchUser, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.id;
    const user = await Distributor.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//<<<<<<<<<>>>>>>>>>
//route-4 update user

router.put("/updateuser/:id", async (req, res) => {
  updateuser(req, res);
});

function updateuser(req, res) {
  try {
    Distributor.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          lastname: req.body.lastname,
          contact: req.body.contact,
          address: req.body.address,
          postcode: req.body.postcode,
          state: req.body.state,
          country: req.body.country,
        },
      },
      { new: true }
    ).then((_doc, err) => {
      if (!err) {
        res.status(200).send("Updated");
      } else {
        console.log("Error during record update : " + err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
//<<<<<<<<<>>>>>>>>>>>>>
//Route-5 forgot_password
router.put(
  "/forgotpass",
  [
    body("email", "Enter a Valid Email ").isEmail(),
    body("password", "Password must be at leasat 5 characters").exists(),
    async (req, res) => {
      let success = false;
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
      }

      try {
        let user = await Distributor.findOne({ email: req.body.email });

        if (!user) {
          success = false;
          return res.status(400).json({
            success,
            error: "Enter valid credentials(Email not found)",
          });
        }

        const salt = await bcrypt.genSalt(10);
        const secPasswd = await bcrypt.hash(req.body.password, salt);

        try {
          Distributor.findOneAndUpdate(
            { _id: user._id },
            {
              $set: {
                password: secPasswd,
              },
            },
            { new: true }
          ).then((_doc, err) => {
            if (!err) {
              res.status(200).send("Password Updated");
            } else {
              console.log("Error during record update : " + err);
            }
          });
        } catch (err) {
          console.log(err);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    },
  ],
  async (req, res) => {
    updatepassword(req, res);
  }
);

//Route-6 Delete User

router.delete("/deleteuser/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    Distributor.findOneAndDelete({
      _id: req.params.id,
    }).then((_doc, err) => {
      if (!err) {
        res.status(200).send("User deleted");
      } else {
        console.log("Error during delete operation  : " + err);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
