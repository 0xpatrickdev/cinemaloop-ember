import Ember from 'ember';
import DS from 'ember-data';
export default Ember.Controller.extend({
  newUser: {},
  actions: {
    save() {
      let model = this.store.createRecord('user', this.get("newUser"))
      this.set("newUser", {})
      model.save().then(() => {
        this.transitionToRoute('application', model)
      })
    }
  }
});
