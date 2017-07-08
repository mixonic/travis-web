import JobV2FallbackSerializer from "travis/src/data/models/job_v2_fallback/serializer";

export default JobV2FallbackSerializer.extend({
  attrs: {
    _config: { key: 'config' },
    _finishedAt: { key: 'finished_at' },
    _startedAt: { key: 'started_at' }
  }
});
