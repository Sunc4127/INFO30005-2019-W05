const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI =
 "mongodb+srv://sunc4:Sc@6605447@cluster0-1ldwx.mongodb.net/";

const options = {
  useNewUrlParser: true,
  dbName: "INFO30005"
};

mongoose.connect(dbURI, options).then(
 () => {
   console.log("Database connection established!");
 },
 err => {
   console.log("Error connecting Database instance due to: ", err);
 }
);

require('./users.js');