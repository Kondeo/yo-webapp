'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('WelcomeCtrl', function ($scope, UserLogin, Update) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


