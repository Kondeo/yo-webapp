'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('WelcomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }

    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      alert('This site is not optimized for mobile. Please use the Yo app for mobile access. You will now be redirected to the Yo mobile site.');
      $scope.go('http://www.justyo.co');
    }
  });
