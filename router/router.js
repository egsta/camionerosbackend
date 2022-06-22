const express = require("express");

const router = express.Router();
const camionerosRoute = require("./camioneros");
const camionesRoute = require('./camiones')



router.use("/camioneros", camionerosRoute);

router.use('/camiones', camionesRoute);


// Routes
router.use("/", (req, res) => res.send("Server web corriendo"));

module.exports = router;