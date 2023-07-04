/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /all_users': 'account/UserController.getUsers',

  'POST /signup': 'account/UserController.signup',
  'POST /login': 'account/UserController.login',
  'GET /logout': 'account/UserController.logout',
  'PUT /users/:id': 'account/UserController.updateUser',
  'POST /forgot-password': 'account/UserController.forgotPassword',

  // PARENTS MODULES 
  'POST /addParentDetails': 'parents/ParentController.addParentDetails',

};
