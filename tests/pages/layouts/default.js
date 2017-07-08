import {
  create,
  contains,
  visitable
} from 'ember-cli-page-object';

export const pages = create({
  visit: visitable('/'),
  headerWrapperWhenUnauthenticated: contains('.topbar', { scope: '.feature-wrapper .top.landing-page header.top' }),
  headerWrapperWhenAuthenticated: contains('.topbar', { scope: '.feature-wrapper .main .wrapper.non-centered header.top' }),
});
