var express = require('express');
var app = express();
var cardRouter = express.Router();

var cards = require('../client/src/models/cards')();
var Card = require('../client/src/models/card');

cardRouter.get('/:id', function(req, res){
  res.json(cards[req.params.id]);
});

cardRouter.get('/', function(req, res) {
  res.json(cards);
});

cardRouter.put('/:id', function(req, res) {
  var card = new Card({
    name: req.body.name
  });
  cards[req.params.id] = card;
  res.json({data: cards});
});

cardRouter.post('/', function(req, res) {
  var card = new Card({
    name: req.body.name
  });
  cards.push(card);
  res.json({data: cards});
});

cardRouter.delete('/:id', function(req, res) {
  cards.splice(req.params.id, 1);
  res.json({data: cards});
});


module.exports = cardRouter;
