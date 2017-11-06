var Cards = require('../models/cards');

var UI = function() {
  var cards = new Cards();
  this.render(cards);
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(cards) {
    var container = document.getElementById('cards');

    for (var card of cards) {
      var li = document.createElement('li');
      this.appendText(li, film.name, 'Name: ');
      container.appendChild(li);
    }
  }
}

module.exports = UI;