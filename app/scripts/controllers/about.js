'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
