import {
  create,
  visitable,
  text
} from 'ember-cli-page-object';

export const pages = create({
  visit: visitable('/404'),
  errorHeader: text('.error-text'),
});
