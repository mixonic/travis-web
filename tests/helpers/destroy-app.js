import Ember from 'ember';

export const helpers = function destroyApp(application) {
  Ember.run(application, 'destroy');
  server.shutdown();
}
