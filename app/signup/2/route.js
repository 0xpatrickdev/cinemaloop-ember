import Ember from 'ember';

export default Ember.Route.extend({
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
