import TravisRoute from "travis/src/ui/routes/basic";

export default TravisRoute.extend({
  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('repo').activate('builds');
  },

  titleToken() {
    return 'Builds';
  },

  model() {
    return this.modelFor('repo').get('builds');
  },
});
