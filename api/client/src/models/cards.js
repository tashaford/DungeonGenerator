var Card = require('./card');

var Cards = function() {

  var card_a1 = new Card({
    name: "A1",
    image: "./images/a1"
  });

  var card_a2 = new Card({
    name: "A2",
    image: "./images/a2"
  });

  var card_a3 = new Card({
    name: "A3",
    image: "./images/a3"
  });

  var card_b1 = new Card({
    name: "B1",
    image: "./images/b1"
  });

  var card_b2 = new Card({
    name: "B2",
    image: "./images/b2"
  });

  var card_b3 = new Card({
    name: "B3",
    image: "./images/b3"
  });

  var card_e1 = new Card({
    name: "A1",
    image: "./images/a1"
  });

  var card_e2 = new Card({
    name: "E2",
    image: "./images/e2"
  });

  var card_e3 = new Card({
    name: "E3",
    image: "./images/e3"
  });

  var card_f1 = new Card({
    name: "F1",
    image: "./images/f1"
  });

  var card_f2 = new Card({
    name: "F2",
    image: "./images/f2"
  });

  var card_f3 = new Card({
    name: "F3",
    image: "./images/f3"
  });

  return [card_a1, card_a2, card_a3,
          card_b1, card_b2, card_b3,
          card_e1, card_e2, card_e3,
          card_f1, card_f2, card_f3];
}

module.exports = Cards;
