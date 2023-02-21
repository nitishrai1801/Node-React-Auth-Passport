const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**To be updated by Eknoor***/
PaymentSchema = new Schema({
  paymentId: {
    type: String,
  },
  amount: {
    type: Number,
  },
  userEmail: {
    type: String,
  },
});

module.exports = mongoose.model("Payments", PaymentSchema);