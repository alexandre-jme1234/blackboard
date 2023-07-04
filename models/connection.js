// Insert your connection string inside this variable

const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://jammealexandre1:tGCM3oHUjsQVtDZg@blackboard.ovjkwik.mongodb.net/blackboard";

module.exports = connectionString; // Do not edit/remove this line

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));