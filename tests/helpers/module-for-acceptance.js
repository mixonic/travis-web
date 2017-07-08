import { module } from 'qunit';
import Ember from 'ember';
import startApp from "./start-app";
import destroyApp from "./destroy-app";
import '../helpers/percy/register-helpers';

const { RSVP: { Promise } } = Ember;

export const helpers = function (name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      window.localStorage.clear();
      window.sessionStorage.clear();

      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
