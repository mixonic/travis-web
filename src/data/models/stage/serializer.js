import V3Serializer from "travis/src/data/models/v3/serializer";

export default V3Serializer.extend({
  attrs: {
    _finishedAt: { key: 'finished_at' },
    _startedAt: { key: 'started_at' }
  }
});
