const mongoose = require("mongoose");

//module.exports = function initializeDB() {

const initializeDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("connected--->");
    })
    .catch((error) => {
      console.error(error.message);
      console.log(`Final project failed at http://localhost:${port}`);
      process.exit();
    });
};

module.exports = initializeDB();
