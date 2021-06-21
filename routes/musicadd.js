const express = require('express');
const Music = require('../model/Music');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("musicadd", {title: "musiqa qo`shish sahifasi"})
});

module.exports = router;
