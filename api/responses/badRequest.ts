/**
 * 400 (Bad Request) Handler
 *
 * Usage:
 * return res.badRequest();
 * return res.badRequest(data);
 * return res.badRequest(data, 'some/specific/badRequest/view');
 *
 * e.g.:
 * ```
 * return res.badRequest(
 *   'Please choose a valid `password` (6-12 characters)',
 *   'trial/signup'
 * );
 * ```
 */

module.exports = function badRequest(data: any, options: any) {

  // Get access to `req`, `res`, & `sails`
  let req = this.req;
  let res = this.res;
  let sails = req._sails;

  // Set status code
  res.status(400);
  res.send(data);
  
};

