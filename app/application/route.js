import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  model() {
        return this.store.findAll('user');
    }
});
