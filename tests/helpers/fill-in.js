import Ember from 'ember';

export const helpers = function (elem, text, event = 'keyup') {
  var e = Ember.$.Event(event);
  e.which = 50;
  elem.val(text);
  elem.trigger(e);
}
