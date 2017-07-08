import {
  create,
  collection,
  text,
} from 'ember-cli-page-object';

export const pages = create({
  sections: collection({
    itemScope: 'footer.footer .inner .footer-elem',
    item: {
      title: text('h3.footer-title'),
    },
  }),
});
