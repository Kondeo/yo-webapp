'use strict';

/**
 * @ngdoc overview
 * @name yoFrontApp
 * @description
 * # yoFrontApp
 *
 * Main module of the application.
 */
angular
  .module('yoFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/joinyo', {
        templateUrl: 'views/loginregister.html',
        controller: 'LoginRegisterCtrl'
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
