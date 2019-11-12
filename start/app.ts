/*
|--------------------------------------------------------------------------
| Application file
|--------------------------------------------------------------------------
|
| This file is used to define the service providers and ace commands used by
| your project. This is the first file AdonisJs will load when bootstrapping
| your app.
|
| Note: You cannot use IoC container bindings in this file, since the framework
| is not ready yet to resolve the IoC container bindings.
|
*/

/*
|--------------------------------------------------------------------------
| Main providers
|--------------------------------------------------------------------------
|
| List of providers that are always loaded
|
*/
export const providers = [
  '@adonisjs/core',
  '@adonisjs/bodyparser',
  '@adonisjs/session',
  '@adonisjs/view'
]

/*
|--------------------------------------------------------------------------
| Ace providers
|--------------------------------------------------------------------------
|
| List of ace command line providers. They will be loaded only when you run
| an ace command
|
*/
export const aceProviders = [
]
