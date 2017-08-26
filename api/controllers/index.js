var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/cards', require('./cards'));

router.get('/', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;