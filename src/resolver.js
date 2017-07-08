import ClassicResolver from 'ember-resolver';
import Resolver from 'ember-resolver/resolvers/glimmer-wrapper';
import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

let moduleConfig = buildResolverConfig(config.modulePrefix);

['config', 'pusher'].forEach(type => {
  moduleConfig.types[type] = { definitiveCollection: 'main' };
  moduleConfig.collections['main'].types.push(type);
});

export default Resolver.extend({
  config: moduleConfig,
  init(options) {
    this._super(options);
    this._fallback = ClassicResolver.create(Object.assign({
      namespace: { modulePrefix: config.modulePrefix }
    }, options));
  },
  resolve(name, referrer) {
    let result = this._super(name, referrer);
    if (!result) {
      result = this._fallback.resolve(name);
    }
    return result;
  }
});
