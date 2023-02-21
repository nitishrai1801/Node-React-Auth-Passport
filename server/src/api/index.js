const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const paymentApi = require("./payment");
const restaurantApi = require("./restaurantList")

const router = express.Router();
/**To be uncommented by Eknoor***/
// router.use(registerApi);
router.use(loginApi);
router.use(paymentApi);
router.use(restaurantApi)
module.exports = router;
