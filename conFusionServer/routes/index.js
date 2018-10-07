var express = require("express");
var router = express.Router();
const cors = require("./cors");
/* GET home page. */
router
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    res.render("index", { title: "Express" });
  });

module.exports = router;
