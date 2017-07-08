import PageObject from 'travis/tests/page-object';

let {
  text
} = PageObject;

export const pages = PageObject.create({
  automaticSignOutNotification: text('p.flash-message')
});
