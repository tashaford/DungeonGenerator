var Card = require('../card');
var assert = require('assert');

describe('Card', function() {
  var card;

  beforeEach(function() {
    card = new Card({
      name: 'A1'
    });
  });

  it('should have name A1', function() {
    assert.equal(card.name, 'A1');
  });
});
