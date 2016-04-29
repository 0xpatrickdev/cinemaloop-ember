import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('two-select-boxes-component', 'Integration | Component | two select boxes component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{two-select-boxes-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#two-select-boxes-component}}
      template block text
    {{/two-select-boxes-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
