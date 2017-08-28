var Card = require('./card');

var Cards = function() {

  var card_a4 = new Card({
    name: "A4",
    image: "http://192.168.111.159:3000/images/a4.png"
  });

  var card_a5 = new Card({
    name: "A5",
    image: "http://192.168.111.159:3000/images/a5.png"
  });

  var card_a6 = new Card({
    name: "A6",
    image: "http://192.168.111.159:3000/images/a6.png"
  });

  var card_b4 = new Card({
    name: "B4",
    image: "http://192.168.111.159:3000/images/b4.png"
  });

  var card_b5 = new Card({
    name: "B5",
    image: "http://192.168.111.159:3000/images/b5.png"
  });

  var card_b6 = new Card({
    name: "B6",
    image: "http://192.168.111.159:3000/images/b6.png"
  });

  var card_e2 = new Card({
    name: "E2",
    image: "http://192.168.111.159:3000/images/e2.png"
  });

  var card_e3 = new Card({
    name: "E3",
    image: "http://192.168.111.159:3000/images/e3.png"
  });

  var card_e4 = new Card({
    name: "E4",
    image: "http://192.168.111.159:3000/images/e4.png"
  });

  var card_f4 = new Card({
    name: "F4",
    image: "http://192.168.111.159:3000/images/f4.png"
  });

  var card_f5 = new Card({
    name: "F5",
    image: "http://192.168.111.159:3000/images/f5.png"
  });

  var card_f6 = new Card({
    name: "F6",
    image: "http://192.168.111.159:3000/images/f6.png"
  });

  return [[card_a4, card_a5, card_a6],
          [card_b4, card_b5, card_b6],
          [card_e2, card_e3, card_e4],
          [card_f4, card_f5, card_f6]];
}

module.exports = Cards;
