import {
  create,
  visitable
} from 'ember-cli-page-object';

export const pages = create({
  visit: visitable('/features')
});
