/**
 * depapi
 *
 * A Dependency API
 */
module.exports = {
  route: {
    Route: require('lib/route/route.js'),
    Bundle: require('lib/route/bundle.js'),
    Resource: require('lib/route/resource.js')
  },
  //controller:
  //{
  //  require('lib/controller')
  //},
  Server: require('lib/server.js')
};
