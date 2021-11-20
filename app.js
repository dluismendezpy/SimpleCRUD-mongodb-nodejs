const mongoose = require("mongoose");
const url = "mongodb://localhost/mongo_signup_login_db";

mongoose
  .connect(url, {})
  .then(() => console.log("Connection successfully!"))
  .catch((e) => console.log("Error! " + e));

const peopleSchema = mongoose.Schema({
    name:String,
    age:Number,
    country:String
})

const peopleModel = mongoose.model('people', peopleSchema)

// List
const listData = async () => {
    const people = await peopleModel.find()
    console.log(people);
}
