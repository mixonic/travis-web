import RepoV2FallbackSerializer from "travis/src/data/models/repo_v2_fallback/serializer";
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

var Serializer = RepoV2FallbackSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    permissions: { key: '@permissions' }
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (!id && requestType === 'findRecord') {
      id = payload.id;
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

export default Serializer;