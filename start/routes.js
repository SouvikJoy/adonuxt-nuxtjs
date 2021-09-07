'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');

Route.group(() => {
  Route.get('products', 'ProductController.index');
  // Route.post('users', closure)
}).prefix('/api/v1')
  .namespace('Api/V1')
  .middleware(['api']);

Route.any('*', 'NuxtController.render');
