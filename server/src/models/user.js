const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**To be updated by Eknoor***/
UserSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("users", UserSchema);
