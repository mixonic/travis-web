import {
  create,
  contains,
  visitable,
  text,
} from 'ember-cli-page-object';

export const pages = create({
  visit: visitable('/non-existent/repository'),
  showsTravisImage: contains('img', { scope: '.main .content-page' }),
  errorMessage: text('.not-found'),
});
