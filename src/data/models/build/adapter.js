import V3Adapter from "travis/src/data/models/v3/adapter";

export default V3Adapter.extend({
  includes: 'build.commit,build.branch,build.stages',

  pathPrefix(modelName, id, snapshot, type, query) {
    if (type === 'query' && query.repository_id) {
      return `repo/${query.repository_id}`;
    }
  }
});
