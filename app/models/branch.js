import Ember from 'ember';
import Model from 'travis/models/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  defaultBranch: attr('boolean'),
  lastBuild: belongsTo('build'),
  exists_on_github: attr('boolean'),

  crons: hasMany('crons', { inverse: 'branch' }),
  builds: hasMany('builds', { inverse: 'branch' }),
  repo: belongsTo('repo', { inverse: 'defaultBranch' }),
});