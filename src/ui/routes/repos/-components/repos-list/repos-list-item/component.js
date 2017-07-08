import Ember from 'ember';
import Polling from "travis/src/utils/mixins/polling/mixin";
import colorForState from "travis/src/utils/color-for-state";

const { service } = Ember.inject;

export default Ember.Component.extend(Polling, {
  router: service(),
  tagName: 'li',
  pollModels: 'repo',
  classNames: ['repo'],
  classNameBindings: ['selected'],

  selected: Ember.computed('selectedRepo', function () {
    return this.get('repo') === this.get('selectedRepo');
  }),

  color: Ember.computed('repo.currentBuild.state', function () {
    return colorForState(this.get('repo.currentBuild.state'));
  }),

  scrollTop() {
    if (window.scrollY > 0) {
      return Ember.$('html, body').animate({
        scrollTop: 0
      }, 200);
    }
  }
});