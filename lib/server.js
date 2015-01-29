var hapi = require('hapi');
var defer = require('deferred');
var util = require('util');

/**
 *
 * @constructor
 */
var Server = function()
{
  hapi.Server.call(this);
};

// Extend and export
util.inherits(Server, hapi.Server);
module.exports = Server;

/**
 * Start the server
 *
 * @returns {defer.promise}
 */
Server.prototype.start = function()
{
  var def = defer();

  this.super_.start.call(this, function()
  {
    def.resolve();
  });

  return def.promise;
};

/**
 * Adds controllers/routes to the Hapi server
 *
 * @param {Controller} controller
 * @return {Server}
 */
Server.prototype.addController = function(controller)
{
  var routes = controller.getRoutes();

  for (var i = 0; i < routes.length; i++)
  {
    var route = routes[i];
    route.handler = controller.getRequestHandler();
    this.route(route);
  }

  return this;
};
