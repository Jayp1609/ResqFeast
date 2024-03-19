const express = require("express");
const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 5000;

var cors = require("cors");
app.use(cors());

// It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

//Routes
app.use("/api/user", require("./routes/user.js"));
app.use("/api/distributor", require("./routes/distributor.js"));
app.use("/api/foodinfo", require("./routes/foodinfo.js"));
//app.use("/admin", require("./routes/admin.js"));

app.listen(port, () => {
  console.log(`ResqFeast server listening on port ${port}`);
});
