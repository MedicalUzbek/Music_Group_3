var express = require('express');
const Music = require('../model/Music');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("musicadd", {title: "musiqa qo`shish sahifasi"})
});

/* GET home page. */
router.get('/', function(req, res, next) {
  const musics = [
    {
      id: 1,
      name: 'Asilbek',
      singer: 'Zor',
      comments: 'norm'
    },
    {
      id: 2,
      name: 'Asilbek2',
      singer: 'Zor2',
      comments: 'norm2'
    },
    {
      id: 3,
      name: 'Asilbek3',
      singer: 'Zor3',
      comments: 'norm3'
    },
  ]


  Music.find({}, (err, musics) => {
    if(err) console.log(err);
    else{
      res.render('index', {title: 'bosh sahifa', musics})
    }
  })
});

module.exports = router;
