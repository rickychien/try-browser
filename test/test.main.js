var assert = chai.assert;

suite('main', function() {
  setup(function() {
    this.p = document.querySelector('p');
  });

  suite('paragraph', function() {
    test('should contain a p element"', function() {
      assert.ok(this.p);
    });

    test('should contain a text with "This paragraph is awesome!!"', function() {
      assert.equal(this.p.textContent, 'This paragraph is awesome!!');
    });
  });
});