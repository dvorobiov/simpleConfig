
exports = module.exports = config;

var config = {}
  , currentEnvironment = process.env.ENV_VARIABLE || 'development';
  , config.settings = {};

config.configure = function(env, fn){
  var envs = 'all'
    , args = [].slice.call(arguments);

  fn = args.pop();
  if (args.length) envs = args;
  if ('all' == envs || ~envs.indexOf(currentEnvironment)) fn.call(this);
  return this;
};

config.set = function(setting, val){
  if (1 == arguments.length) {
      return this.settings[setting];
  } else {
    this.settings[setting] = val;
    return this;
  }
};

config.get = function(setting) {
  return this.settings[setting];
};


