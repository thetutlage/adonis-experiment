/*
|--------------------------------------------------------------------------
| Application middleware
|--------------------------------------------------------------------------
|
| This file is used to define middleware for HTTP requests. You can register
| middleware as a `closure` or an IoC container binding. The bindings are
| preffered, since they keep this file clean.
|
*/

import MiddlewareStore from '@ioc:Adonis/Core/MiddlewareStore';

/*
|--------------------------------------------------------------------------
| Global middleware
|--------------------------------------------------------------------------
|
| An array of global middleware, that will be executed in the order they
| are defined for all HTTP requests.
|
*/
MiddlewareStore.register([
  'Adonis/Core/CorsMiddleware',
  'Adonis/Addons/BodyParserMiddleware',
]);

/*
|--------------------------------------------------------------------------
| Named middleware
|--------------------------------------------------------------------------
|
| Named middleware are defined a key-value pair. The value is the namespace
| or middleware function and key is the alias. Later you can use these
| alias on individual routes. For example:
|
| { auth: 'Adonis/Auth/Middleware' }
|
| and then use it as follows
|
| Route.get('dashboard', 'UserController.dashboard').middleware('auth')
|
*/
MiddlewareStore.registerNamed({});
