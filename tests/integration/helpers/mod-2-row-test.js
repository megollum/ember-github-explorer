
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mod-2-row', 'helper:mod-2-row', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{mod-2-row inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

