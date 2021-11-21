const mongoose = require("mongoose");
const url = "mongodb://localhost/mongo_signup_login_db";

mongoose
  .connect(url, {})
  .then(() => console.log("Connection successfully!"))
  .catch((e) => console.log("Error! " + e));

const peopleSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    country: String,
  },
  { versionKey: false }
);

const peopleModel = mongoose.model("people", peopleSchema);

// List
const listData = async () => {
  const people = await peopleModel.find();
  console.log(people);
};

// Create
const create = async () => {
  const people = new peopleModel({
    name: "Luis Mendez",
    age: 20,
    country: "Dominican Republic",
  });
  const result = await people.save();
  console.log(result);
};

// Update
const Update = async (id) => {
  const people = await peopleModel.updateOne(
    { _id: id },
    {
      $set: {
        name: "Name Updated",
        country: "United States",
      },
    }
  );
  console.log(people);
};

const Delete = async (id) => {
  const people = await peopleModel.deleteOne({ _id: id });
  console.log(people);
};

Delete("61986c4487935b62132088cf");
