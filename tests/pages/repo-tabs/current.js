import {
  create,
  visitable,
  hasClass,
  text,
  isVisible
} from 'ember-cli-page-object';

export const pages = create({
  visit: visitable('travis-ci/travis-web'),
  currentTabActive: hasClass('active', '#tab_current'),
  showsNoBuildsMessaging: text('.missing-notice h2.page-title'),
  showsCurrentBuild: hasClass('started', 'section.build-header'),
  noJobsErrorMessage: isVisible('.notice-banner--red')
});
