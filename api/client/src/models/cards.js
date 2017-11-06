var Card = require('./card');

var Cards = function() {

  var card_a1 = new Card({
    name: "A1",
    image: "http://192.168.1.106:3000/images/a1.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_a2 = new Card({
    name: "A2",
    image: "http://192.168.1.106.223:3000/images/a2.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_a3 = new Card({
    name: "A3",
    image: "http://192.168.1.106:3000/images/a3.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_a4 = new Card({
    name: "A4",
    image: "http://192.168.1.106:3000/images/a4.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_a5 = new Card({
    name: "A5",
    image: "http://192.168.1.106:3000/images/a5.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_a6 = new Card({
    name: "A6",
    image: "http://192.168.1.106:3000/images/a6.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_b1 = new Card({
    name: "B1",
    image: "http://192.168.1.106:3000/images/b1.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_b2 = new Card({
    name: "B2",
    image: "http://192.168.1.106:3000/images/b2.png",
    greenArrows: ['Right', 'Top']
  });

  var card_b3 = new Card({
    name: "B3",
    image: "http://192.168.1.106:3000/images/b3.png",
      greenArrows: ['Right', 'Top', 'Left']
    });

  var card_b4 = new Card({
    name: "B4",
    image: "http://192.168.1.106:3000/images/b4.png",
    greenArrows: ['Top', 'Left']
  });

  var card_b5 = new Card({
    name: "B5",
    image: "http://192.168.1.106:3000/images/b5.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_b6 = new Card({
    name: "B6",
    image: "http://192.168.1.106:3000/images/b6.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_e1 = new Card({
    name: "E1",
    image: "http://192.168.1.106:3000/images/e1.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_e2 = new Card({
    name: "E2",
    image: "http://192.168.1.106:3000/images/e2.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_e3 = new Card({
    name: "E3",
    image: "http://192.168.1.106:3000/images/e3.png",
    greenArrows: ['Right', 'Left']
  });

  var card_e4 = new Card({
    name: "E4",
    image: "http://192.168.1.106:3000/images/e4.png",
    greenArrows: ['Right', 'Left']
  });

  var card_f1 = new Card({
    name: "F1",
    image: "http://192.168.1.106:3000/images/f1.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_f2 = new Card({
    name: "F2",
    image: "http://192.168.1.106:3000/images/f2.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_f3 = new Card({
    name: "F3",
    image: "http://192.168.1.106:3000/images/f3.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_f4 = new Card({
    name: "F4",
    image: "http://192.168.1.106:3000/images/f4.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_f5 = new Card({
    name: "F5",
    image: "http://192.168.1.106:3000/images/f5.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_f6 = new Card({
    name: "F6",
    image: "http://192.168.1.106:3000/images/f6.png",
    greenArrows: ['Right', 'Top', 'Left']
  });

  var card_j1 = new Card({
    name: "J1",
    image: "http://192.168.1.106:3000/images/j1.png",
    greenArrows: ['Top']
  });

  var card_j2 = new Card({
    name: "J2",
    image: "http://192.168.1.106:3000/images/j2.png",
    greenArrows: ['Top']
  });

  var card_j3 = new Card({
    name: "J3",
    image: "http://192.168.1.106:3000/images/j3.png",
    greenArrows: ['Right', 'Top']
  });

  var card_j4 = new Card({
    name: "J4",
    image: "http://192.168.1.106:3000/images/j4.png",
    greenArrows: ['Right', 'Top']
  });

  var card_j5 = new Card({
    name: "J5",
    image: "http://192.168.1.106:3000/images/j5.png",
    greenArrows: ['Top', 'Left']
  });

  var card_j6 = new Card({
    name: "J6",
    image: "http://192.168.1.106:3000/images/j6.png",
    greenArrows: ['Top', 'Left']
  });

  return [[card_a1, card_a3, card_a3, card_a4, card_a5, card_a6],
          [card_b1, card_b2, card_b3, card_b4, card_b5, card_b6],
          [card_e1, card_e2, card_e3, card_e4],
          [card_f1, card_f2, card_f3,card_f4, card_f5, card_f6],
          [card_j1, card_j3, card_j3, card_j4, card_j5, card_j6]];
}

module.exports = Cards;