const mongoose = require("mongoose");
const url = "mongodb://localhost/mongo_signup_login_db";

mongoose
  .connect(url, {})
  .then(() => console.log("Connection successfully!"))
  .catch((e) => console.log("Error! " + e));
